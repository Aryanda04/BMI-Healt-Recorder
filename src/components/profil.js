// import {auth} from '../firebase'
import puskesmasImg from "../assets/puskesmas-assets.jpg";

const Profil = () => {
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
        <button>Edit Profil</button>
      </div>
    </>
  );
};

export default Profil;
