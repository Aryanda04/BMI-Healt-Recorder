import React, { useEffect, useState } from "react";
import { ref, set, get, child } from "firebase/database";
import { db, auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const ProfilForm = () => {
  let navigate = useNavigate();
  let [fetchStatus, setFetchStatus] = useState(true);

  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    profile_picture: "",
  });

  useEffect(() => {
    const dbRef = ref(db);

    get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          let result = data["profil"];
          //   console.log(result);
          setInput({
            name: result.name,
            address: result.address,
            email: result.email,
            phone: result.phone,
            profile_picture: result.profile_picture,
          });
        }
        return () => {
          setInput({
            name: "",
            address: "",
            email: "",
            phone: "",
            profile_picture: "",
          });
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };
  const writeUserData = (e) => {
    e.preventDefault();
    let { name, email, phone, address, profile_picture } = input;
    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/profil/`), {
      name: name,
      email: email,
      phone: phone,
      address: address,
      profile_picture: profile_picture,
    });
    navigate("/profile");
    alert("berhasil mengubah data");
    window.location.reload(true);
    setFetchStatus(true);
  };

  return (
    <>
      <div className="profilForm-container">
        <label>Nama </label>
        <input
          type="text"
          placeholder="text"
          value={input.name}
          id="name"
          onChange={handleChange}
          name="name"
        ></input>
        <label>Alamat </label>
        <input
          value={input.address}
          id="address"
          onChange={handleChange}
          type="text"
          placeholder="alamat"
          name="address"
        ></input>
        <label>Email </label>
        <input
          value={input.email}
          id="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
        ></input>

        <label>Phone </label>

        <input
          value={input.phone}
          id="phone"
          onChange={handleChange}
          type="text"
          placeholder="Phone"
          name="phone"
        ></input>
        <label>Foto Profil </label>
        <input
          value={input.profile_picture}
          id="profilePicture"
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
          name="profile_picture"
        ></input>

        <button onClick={writeUserData}>Simpan Perubahan </button>
      </div>
    </>
  );
};
export default ProfilForm;
