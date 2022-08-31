import React, { useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";

import { db, auth } from "../../firebase";
import ProfilFormBtn from "./profilForm-view";

const Profil = () => {
  const [dataProfil, setDataProfil] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);

  const triggerText = "Edit Data";
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
      <div className="dashboardContainer">
        <h1>
          Informasi Puskesmas {dataProfil !== undefined ? dataProfil.name : "-"}
        </h1>
        <div className="profilContainer">
          <div className="profilPict-Container">
            <img
              src={dataProfil !== undefined ? dataProfil.profile_picture : "-"}
              className="profillPict"
              alt="profilePicture"
            />
          </div>
          <div className="profilDetail-Container">
            <h2>
              Puskesmas {dataProfil !== undefined ? dataProfil.name : "-"}
            </h2>

            <h4>Alamat</h4>
            <p>{dataProfil !== undefined ? dataProfil.address : "-"}</p>
            <br></br>
            <h4>Kontak</h4>
            <p>No HP : {dataProfil !== undefined ? dataProfil.phone : "-"}</p>
            <p>Email : {dataProfil !== undefined ? dataProfil.email : "-"}</p>
          </div>
          <ProfilFormBtn triggerText={triggerText} className="profilFormBtn" />
        </div>
      </div>
    </>
  );
};

export default Profil;
