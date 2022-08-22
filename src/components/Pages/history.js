// import {auth} from '../firebase'
import age from "age-calculator";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import GrafikBBLakiLaki from "../Card/garfikBBLaki";
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
const handleDate = () => {
  const d = new Date();
  let bulanNow = "" + (d.getMonth() + 3);
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

const History = () => {
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
    let name = event.target.value;
    arrSementaraDataPengukuran.push(dataPengukuran[name]);

    arrSementaraDataPengukuran.map((res) => {
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
          `puskesmas/users/${auth.currentUser.uid}/pengukuran/${res.name}/${idPengukuran}`
        ),
        {
          umurBulan: umurBulan,
        }
      );
    });
  };

  const keys = Object.keys(dataPengukuran);
  // console.log(arrKeyPengukuran);
  // console.log(dataPengukuran);
  // console.log("===========================");

  return (
    <>
      <div className="riwayatContainer">
        <h1>Riwayat Pengukuran</h1>
        <section className="riwayatPengukuran" id="riwayat-pengukuran">
          {keys.map((key) => {
            const dataPengukuranBulanIni = dataPengukuran[key];
            const objKeys = Object.keys(dataPengukuranBulanIni).slice(0, -2);
            const dataPengukuranTerbaru = objKeys.pop();
            // console.log(dataPengukuranTerbaru);
            console.log(dataPengukuranBulanIni);
            return (
              <>
                <div className="riwayatCard">
                  <div className="left">
                    <h2>
                      {dataPengukuranBulanIni.name}
                      {/* {handleStatus(Status)} */}
                    </h2>
                    {/* <h4>{item.tanggal_lahir}</h4> */}
                    <h5>
                      Waktu Pengukuran :
                      {dataPengukuranTerbaru !== undefined
                        ? handleWaktuPengukuran(dataPengukuranTerbaru)
                        : "Lakukan Pengukuran"}
                    </h5>
                    <span></span>
                  </div>

                  <div className="right">
                    <pre>
                      <h5>
                        Berat Badan :
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "BeratBadan"
                            ]
                          : "-"}
                      </h5>
                      <h5>
                        Tinggi Badan :{" "}
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "TinggiBadan"
                            ]
                          : "-"}
                      </h5>
                      <h5>
                        IMT :{" "}
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru]["IMT"]
                          : "-"}
                      </h5>
                      <h5>
                        Umur (Bulan) :
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "umurBulan"
                            ]
                          : "-"}
                      </h5>
                    </pre>
                  </div>

                  <button
                    onClick={mulaiPengukuran}
                    value={dataPengukuranBulanIni.name}
                  >
                    Mulai
                  </button>
                  <GrafikBBLakiLaki />
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
