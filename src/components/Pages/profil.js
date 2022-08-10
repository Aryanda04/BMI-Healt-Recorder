import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ref, onValue, child, get } from "firebase/database";

import { db, auth } from "../../firebase";
import Container from "./profilForm-view";

const Profil = () => {
  const [dataProfil, setDataProfil] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);

  const triggerText = "Open form";
  useEffect(() => {
    const dbRef = ref(db);

    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            const data = snapshot.val();
            // console.log(data.profil);
            let result = data["profil"];
            setDataProfil(result);
          } else {
            console.log("No data available");
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
  // console.log(dataProfil);
  return (
    <>
      <div className="profilContainer">
        <div className="profilPict-Container">
          <img
            src={dataProfil.profile_picture}
            className="profillPict"
            alt="profilePicture"
          />
        </div>
        <div className="profilDetail-Container">
          <h2>Nama Puskesmas</h2>
          {dataProfil.name}
          <h2>Aalamat</h2>
          <p>{dataProfil.address}</p>
          <h2>Kontak</h2>
          <h4>No HP : {dataProfil.phone}</h4>
          <h4>Email : {dataProfil.email}</h4>
        </div>
      </div>
      <Container triggerText={triggerText} />
    </>
  );
};

export default Profil;
