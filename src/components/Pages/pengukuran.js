// import {auth} from '../firebase'
import uniqid from "uniqid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";

import puskesmasImg from "../../assets/puskesmas-assets.jpg";
import { writeUserData, db, auth } from "../../firebase";
import convertLayerAtRulesToControlComments from "tailwindcss/lib/lib/convertLayerAtRulesToControlComments";
const Pengukuran = () => {
  let { slug } = useParams();

  const [dataPengukuran, setDataPengukuran] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);
  useEffect(() => {
    const dbRef = ref(db);
    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let result = data["pengukuran"][slug];
            // console.log(result);
            setDataPengukuran(result);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  const handleGender = (params) => {
    if (params === "1") {
      return "laki-laki";
    } else if (params === "0") {
      return "Perempuan";
    }
  };
  const changeFetchStatus = () => {
    setFetchStatus(true);
    console.log(dataPengukuran);
  };

  return (
    <>
      <div className="dashboardContainer">
        <h1>Mulai Pengukuran</h1>
        <h2> name : {dataPengukuran.name}</h2>
        <h2> jenisKelamin : {handleGender(dataPengukuran.jenisKelamin)}</h2>
        <h2>Tanggal Lahir : {dataPengukuran.tanggal_lahir}</h2>
        <h2>Test Fetch: {dataPengukuran.test}</h2>
        <br></br>
        <button onClick={changeFetchStatus}>
          Fetch Data (selesai melakukan pengukuran pencet sini)
        </button>
      </div>
    </>
  );
};

export default Pengukuran;
