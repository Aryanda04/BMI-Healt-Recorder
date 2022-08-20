// import {auth} from '../firebase'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";

import puskesmasImg from "../../assets/puskesmas-assets.jpg";
import { writeUserData, db, auth } from "../../firebase";
import convertLayerAtRulesToControlComments from "tailwindcss/lib/lib/convertLayerAtRulesToControlComments";
const PengukuranForm = () => {
  let navigate = useNavigate();

  let [fetchStatus, setFetchStatus] = useState(true);

  const [input, setInput] = useState({
    name: "",
    tanggal_lahir: "",
  });

  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          let result = data["pengukuran"];
          console.log(result);
          setInput({
            name: result.name,
            tanggal_lahir: result.tanggal_lahir,
          });
        }
        return () => {
          setInput({
            name: "",
            tanggal_lahir: "",
          });
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };
  const dateFormatter = (params, yearNow, monthNow) => {
    const year = params.slice(0, 4);
    const month = params.slice(5, 7);
    return yearNow * 12 - year * 12 + (monthNow - month);
  };

  const writeUserData = (e) => {
    e.preventDefault();
    let { name, tanggal_lahir } = input;
    const d = new Date();
    let bulan = d.getMonth() + 9;
    let Tanggal = d.getDate();
    let Tahun = d.getFullYear();
    const idPengukuran = `${bulan}${Tanggal}${Tahun}`;
    // console.log(bulan + "/" + Tanggal + "/" + Tahun);
    const umurBulan = dateFormatter(tanggal_lahir, Tahun, bulan);

    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/pengukuran/${name}`), {
      name: name,
      tanggal_lahir: tanggal_lahir,
    });

    navigate("/riwayat");
    alert("berhasil menambahkan data");
    setFetchStatus(true);
  };

  return (
    <>
      <div className="dashboardContainer">
        <h1>Mulai Pengukuran</h1>

        <div className="pengukuranForm-container">
          <label>Nama </label>
          <input
            type="text"
            placeholder="text"
            value={input.name}
            id="name"
            onChange={handleChange}
            name="name"
          ></input>
          <label>Tanggal Lahir</label>
          <input
            value={input.tanggal_lahir}
            id="tanggalLahir"
            onChange={handleChange}
            type="date"
            placeholder="Date"
            name="tanggal_lahir"
          ></input>
          <button id="addBtn" onClick={writeUserData}>
            Tambahkan
          </button>
        </div>
      </div>
    </>
  );
};

export default PengukuranForm;
