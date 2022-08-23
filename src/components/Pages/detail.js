import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import GrafikBBLakiLaki from "../Card/garfikBBLaki";
import GrafikTBLakiLaki from "../Card/grafikTBLaki";
import GrafikIMTLakiLaki from "../Card/grafikIMTLaki";

const Detail = () => {
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
  console.log(dataPengukuran);
  // const keys = Object.keys(dataPengukuran);

  return (
    <>
      <div className="dashboardContainer">
        <h1>Riwayat Pengukuran</h1>
        <div className="riwayatDetailContent">
          <h2>Nama : {dataPengukuran.name}</h2>
          <h2>Jenis Kelamin : {dataPengukuran.isMale}</h2>
          <h2>Tanggal Lahir : {dataPengukuran.tanggal_lahir}</h2>
          <br></br>
          <h2 className="centerText">Hasil Pengukuran</h2>
          <div className="grafikContatiner">
            <GrafikBBLakiLaki />
            <GrafikTBLakiLaki />
            <GrafikIMTLakiLaki />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
