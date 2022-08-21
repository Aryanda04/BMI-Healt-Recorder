// import {auth} from '../firebase'
import age from "age-calculator";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
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
      let bulanNow = d.getMonth() + 3;
      let TahunNow = d.getFullYear();
      const idPengukuran = handleDate();
      const tahun = res.tanggal_lahir.slice(0, 4);
      const bulan = res.tanggal_lahir.slice(5, 7);

      const umurBulan = (TahunNow - tahun) * 12 + (bulanNow - bulan);
      // console.log(umurBulan);
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
  let arrKeyPengukuran = [];
  keys.forEach((key) => {
    arrDataPengukuran.push(dataPengukuran[key]);
    const keys2 = Object.keys(dataPengukuran[key]).slice(0, -2);
    arrKeyPengukuran.push(keys2);
    // console.log(keys2);
  });
  // console.log(arrKeyPengukuran);
  console.log("===========================");
  return (
    <>
      <div className="riwayatContainer">
        <h1>Riwayat Pengukuran</h1>
        <section className="riwayatPengukuran" id="riwayat-pengukuran">
          {arrDataPengukuran.map((item) => (
            <div className="riwayatCard">
              <div className="left">
                <h2>
                  <pre>
                    {item.name}
                    {handleStatus(item.Status)}
                  </pre>
                </h2>
                <h4>{item.tanggal_lahir}</h4>
                <h5>Waktu Pengukuran : {}</h5>
                <span></span>
              </div>
              <div className="right">
                <pre>
                  <h5>Berat Badan : {console.log(arrKeyPengukuran)} </h5>
                  <h5>Tinggi Badan : {item.TinggiBadan}</h5>
                  <h5>IMT : {item.IMT}</h5>
                </pre>
              </div>
              <button onClick={mulaiPengukuran} value={item.name}>
                Mulai
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default History;
