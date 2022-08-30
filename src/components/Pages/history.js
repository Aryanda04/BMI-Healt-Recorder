// import {auth} from '../firebase'
import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import GrafikBBLakiLaki from "../Card/garfikBBLaki";
import Highcharts from "highcharts";

const History = () => {
  let navigate = useNavigate();
  const [dataPengukuran, setDataPengukuran] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);
  const arrDataPengukuran = [];

  useEffect(() => {
    const dbRef = ref(db);
    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let result = data["pengukuran"];
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
  // console.log(dataPengukuran);

  const mulaiPengukuran = (event) => {
    const arrSementaraDataPengukuran = [];
    let userId = event.target.value;
    arrSementaraDataPengukuran.push(dataPengukuran[userId]);

    arrSementaraDataPengukuran.map((res) => {
      console.log(res);
      const d = new Date();
      let bulanNow = d.getMonth() + 1;
      let TahunNow = d.getFullYear();
      const idPengukuran = handleDate();
      const tahun = res.tanggal_lahir.slice(0, 4);
      const bulan = res.tanggal_lahir.slice(5, 7);

      const umurBulan = (TahunNow - tahun) * 12 + (bulanNow - bulan);
      set(
        ref(
          db,
          `puskesmas/users/${auth.currentUser.uid}/pengukuran/${userId}/${idPengukuran}`
        ),
        {
          umurBulan: umurBulan,
        }
      );
      set(ref(db, `puskesmas/users/${auth.currentUser.uid}/alat`), {
        userId: userId,
      });
    });
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
  const handleWaktuPengukuran = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return `${day}-${month}-${year}`;
  };
  const handleStatus = (params) => {
    if (params === "Normal") {
      return (
        <>
          <p id="statusNormal">{params}</p>
        </>
      );
    } else if (params === "Obesitas") {
      return (
        <>
          <p id="statusObesitas">{params}</p>
        </>
      );
    } else if (params === "Underweight") {
      return (
        <>
          <p id="statusUnderweight">{params}</p>
        </>
      );
    }
  };
  const handleGender = (params) => {
    if (params === 1) {
      return "laki-laki";
    } else if (params === 0) {
      return "Perempuan";
    }
  };

  const keys = Object.keys(dataPengukuran);
  // console.log(arrKeyPengukuran);
  // console.log(dataPengukuran);
  // console.log("===========================");
  const handleShow = (e) => {
    let userId = e.target.getAttribute("value");
    console.log(userId);
    navigate(`/riwayat/${userId}`);
    console.log("BERHASIL");
  };

  return (
    <>
      <div className="riwayatContainer">
        <h1>Riwayat Pengukuran</h1>
        <section className="riwayatPengukuran" id="riwayat-pengukuran">
          {keys.map((key) => {
            const dataPengukuranBulanIni = dataPengukuran[key];
            const objKeys = Object.keys(dataPengukuranBulanIni).slice(0, -3);
            const dataPengukuranTerbaru = objKeys.pop();
            // console.log(dataPengukuranTerbaru);
            // console.log(key);
            // console.log(dataPengukuranBulanIni);
            return (
              <>
                <div className="riwayatCard" value={key} onClick={handleShow}>
                  <div className="left" value={key} onClick={handleShow}>
                    <h2 value={key} onClick={handleShow}>
                      {dataPengukuranBulanIni.name}
                    </h2>
                    <h2>{handleGender(dataPengukuranBulanIni.isMale)}</h2>
                    <h5 value={key} onClick={handleShow}>
                      Waktu Pengukuran :
                      {dataPengukuranTerbaru !== undefined
                        ? handleWaktuPengukuran(dataPengukuranTerbaru)
                        : "Lakukan Pengukuran"}
                    </h5>
                    <span></span>
                  </div>

                  <div className="right" value={key} onClick={handleShow}>
                    <pre>
                      <h5 value={key} onClick={handleShow}>
                        Berat Badan :
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "beratBadan"
                            ]
                          : "-"}
                      </h5>
                      <h5 value={key} onClick={handleShow}>
                        Tinggi Badan :{" "}
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "tinggiBadan"
                            ]
                          : "-"}
                      </h5>
                      <h5 value={key} onClick={handleShow}>
                        IMT :{" "}
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru]["IMT"]
                          : "-"}
                      </h5>
                      <h5 value={key} onClick={handleShow}>
                        Umur (Bulan) :
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "umurBulan"
                            ]
                          : "-"}
                      </h5>
                    </pre>
                  </div>

                  <button onClick={mulaiPengukuran} value={key}>
                    Mulai
                  </button>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default History;
