// import {auth} from '../firebase'
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";

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
  // console.log(dataPengukuran);

  const keys = Object.keys(dataPengukuran);
  keys.forEach((key) => {
    arrDataPengukuran.push(dataPengukuran[key]);
  });
  console.log(arrDataPengukuran);
  return (
    <>
      <div className="riwayatContainer">
        <h1>Riwayat Pengukuran</h1>
        <section className="riwayatPengukuran" id="riwayat-pengukuran">
          {arrDataPengukuran.map((item) => (
            <div className="riwayatCard">
              <div className="left">
                <h2>{item.name}</h2>
                <h4>{item.tanggal_lahir} Tahun</h4>
              </div>
              <div className="right">
                <h5>Berat Badan : {item.beratBadan}</h5>
                <h5>Tinggi Badan : {item.tinggiBadan}</h5>
              </div>
            </div>
          ))}
          ;
        </section>
      </div>
    </>
  );
};

export default History;
