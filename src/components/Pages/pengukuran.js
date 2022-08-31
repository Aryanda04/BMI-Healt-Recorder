// import {auth} from '../firebase'
import uniqid from "uniqid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";

import { writeUserData, db, auth } from "../../firebase";
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
            console.log(result);
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
    // console.log(dataPengukuran);
  };
  const handleDate = () => {
    const d = new Date();
    let bulanNow = "" + (d.getMonth() + 1);
    let TanggalNow = "" + d.getDate();
    let TahunNow = "" + d.getFullYear();
    if (bulanNow.length < 2) bulanNow = "0" + bulanNow;
    if (TanggalNow.length < 2) TanggalNow = "0" + TanggalNow;

    return `${TahunNow}${bulanNow}${TanggalNow}`;
  };
  console.log(dataPengukuran[20220830]);
  const idPengukuran = "20220830";
  // const mulaiPengukuran = (e) => {
  //   let userId = e;
  //   set(ref(db, `puskesmas/users/${auth.currentUser.uid}`), {
  //     alat: userId,
  //   });
  // };

  return (
    <>
      <div className="dashboardContainer">
        <h1>Mulai Pengukuran</h1>
        <h2> name : {dataPengukuran.name}</h2>
        <h2> jenisKelamin : {handleGender(dataPengukuran.jenisKelamin)}</h2>
        <h2>Tanggal Lahir : {dataPengukuran.tanggal_lahir}</h2>
        {/* <h2>Test Fetch: {dataPengukuran.test}</h2> */}
        {/* <button onClick={mulaiPengukuran(slug)}>Mulai Pengukuran</button> */}
        <br></br>
        <h2>
          {" "}
          Data Pengukuran :
          {dataPengukuran[idPengukuran] !== undefined
            ? dataPengukuran[idPengukuran]["BeratBadan"]
            : "Lakukan Pengukuran"}
        </h2>
        <h2>
          IMT :{" "}
          {dataPengukuran[idPengukuran] !== undefined
            ? dataPengukuran[idPengukuran]["IMT"]
            : "Lakukan Pengukuran"}{" "}
        </h2>
        <h2>
          Tinggi Badan :{" "}
          {dataPengukuran[idPengukuran] !== undefined
            ? dataPengukuran[idPengukuran]["TinggiBadan"]
            : "Lakukan Pengukuran"}
        </h2>
        <button onClick={changeFetchStatus}>
          Fetch Data (selesai melakukan pengukuran pencet sini)
        </button>
      </div>
    </>
  );
};

export default Pengukuran;
