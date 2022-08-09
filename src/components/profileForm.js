// // import firebase from 'firebase';
// import React, { useState } from "react";

// const ProfileForm = () => {
//   const [dataProfile, setDataProfile] = useState({
//     title: "",
//     email: "",
//     alamat: "",
//   });
//   const handleOnChange = (e) => {
//     setDataProfile(e.target.value);
//   };
//   const createProfile = () => {
//     const profileRef = firebase
//       .database()
//       .ref(`puskesmas/${dataProfile.title}`);
//     profileRef.push(dataProfile);
//     console.log(dataProfile);
//   };
//   return (
//     <div>
//       <input type="text" onChange={handleOnChange} value={dataProfile.title} />
//       <input type="email" onChange={handleOnChange} value={dataProfile.email} />
//       <input type="text" onChange={handleOnChange} value={dataProfile.alamat} />
//       <button onClick={createProfile}>Submit</button>
//     </div>
//   );
// };

// export default ProfileForm;
