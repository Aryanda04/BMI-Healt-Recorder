// import {auth} from '../firebase'
import uniqid from "uniqid";
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
    jenisKelamin: "",
    jenisKelamin_1: "",
    jenisKelamin_0: "",
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
    if (name === "jenisKelamin_1") {
      setInput({
        ...input,
        jenisKelamin_1: value,
        jenisKelamin_0: "",
        jenisKelamin: value,
      });
    } else if (name === "jenisKelamin_0") {
      setInput({
        ...input,
        jenisKelamin_0: value,
        jenisKelamin_1: "",
        jenisKelamin: value,
      });
    } else {
      setInput({ ...input, [name]: value });
    }
  };
  const dateFormatter = (params, yearNow, monthNow) => {
    const year = params.slice(0, 4);
    const month = params.slice(5, 7);
    return yearNow * 12 - year * 12 + (monthNow - month);
  };

  const writeUserData = (e) => {
    let userId = uniqid();
    e.preventDefault();
    let { name, tanggal_lahir, jenisKelamin } = input;
    const d = new Date();
    let bulan = d.getMonth() + 9;
    let Tanggal = d.getDate();
    let Tahun = d.getFullYear();
    const idPengukuran = `${bulan}${Tanggal}${Tahun}`;
    // console.log(bulan + "/" + Tanggal + "/" + Tahun);
    const umurBulan = dateFormatter(tanggal_lahir, Tahun, bulan);

    set(
      ref(db, `puskesmas/users/${auth.currentUser.uid}/pengukuran/${userId}`),
      {
        name: name,
        tanggal_lahir: tanggal_lahir,
        jenisKelamin: jenisKelamin,
      }
    );
    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/alat`), {
      alat: userId,
    });

    navigate(`/pengukuran/${userId}`);
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
          <div className="">
            <label htmlFor="city" className="">
              Jenis Kelamin
            </label>
            <input
              checked={input.jenisKelamin_1}
              onChange={handleChange}
              type="radio"
              name="jenisKelamin_1"
              value="1"
            />
            Laki-laki
            <input
              checked={input.jenisKelamin_0}
              onChange={handleChange}
              type="radio"
              name="jenisKelamin_0"
              value="0"
            />
            Perempuan
          </div>
          <button id="addBtn" onClick={writeUserData}>
            Tambahkan
          </button>
        </div>
      </div>
    </>
  );
};

export default PengukuranForm;
