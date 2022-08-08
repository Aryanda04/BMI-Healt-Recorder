// import {auth} from '../firebase'
import fixfatText from '../assets/fixfatText.png';


const Profil = () => {
    return (
        <>
        <div className="profilContainer">

        <div className="profilHeader">
            <h1>Profil</h1>
        </div>
        <div className="profilShow">
            <div className='profilPict-Container'>
            <img src={fixfatText} className='profillPict' alt='profilePicture'/>
            </div>
            <h2>
                Nama Puskesmas
            </h2>
            <h3> Puskesmas Kelurahan Grogol Selatan</h3>
            <h2>Aalamat</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <button>
            Edit Profil
        </button>
        </div>
        </>
    )

};

export default Profil;