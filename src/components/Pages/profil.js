// import {auth} from '../firebase'
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import puskesmasImg from "../../assets/puskesmas-assets.jpg";
import { writeUserData } from "../../firebase";

const Profil = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <>
      <div className="profilContainer">
        <h1>Profil</h1>

        <div className="profilShow">
          <div className="profilPict-Container">
            <img
              src={puskesmasImg}
              className="profillPict"
              alt="profilePicture"
            />
          </div>
          <div className="profilDetail-Container">
            <h2>Nama Puskesmas</h2>
            <h4> Puskesmas Kelurahan Grogol Selatan</h4>
            <h2>Aalamat</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>Kontak</h2>
            <h4>No HP : </h4>
            <h4>Email : </h4>
          </div>
        </div>
        <form action="">
          <h1>Username</h1>
          <div className="login-form-container">
            <label>Username </label>
            <input
              type="text"
              placeholder="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label>Email </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            ></input>
            <label>Address </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="text"
            ></input>
            <label>Profile </label>
            <input
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              type="text"
              placeholder="text"
            ></input>

            <button
              onClick={(e) =>
                writeUserData(username, email, profile, address, e)
              }
            >
              Simpan
            </button>
          </div>
        </form>

        <Link to="/editProfile">Edit Profil</Link>
      </div>
    </>
  );
};

export default Profil;
