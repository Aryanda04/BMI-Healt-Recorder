import { Link } from "react-router-dom";
import React from "react";
import { ref, set, child, get, getDatabase } from "firebase/database";

import { db, auth } from "../firebase";

export class ProfilForm extends React.Component {
  // console.log(db);
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      profile_picture: "",
    };
    this.interface = this.interface.bind(this);
  }
  componentDidMount() {
    this.setState({
      db: db,
      id: auth.currentUser.uid,
    });
  }
  interface(e) {
    const id = e.target.id;
    if (id === "addBtn") {
      this.insertData();
    } else if (id === "selectBtn") {
      this.selectData();
    }
  }
  getAllInputs() {
    return {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      profile_picture: this.state.profile_picture,
    };
  }
  insertData() {
    const db = this.state.db;
    const id = this.state.id;
    const data = this.getAllInputs();

    set(ref(db, "puskesmas/users/" + id + "/profil/"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      profile_picture: data.profile_picture,
    })
      .then(() => {
        this.selectData();

        alert("data added success");
      })
      .catch((error) => {
        alert("there was an error, details: " + error);
      });
  }
  selectData() {
    const dbRef = ref(this.state.db);
    const id = this.state.id;

    get(child(dbRef, "puskesmas/users/" + id + "/profil/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({
            name: snapshot.val().name,
            email: snapshot.val().email,
            phone: snapshot.val().phone,
            address: snapshot.val().address,
            profile_picture: snapshot.val().profile_picture,
          });
        } else {
          alert("no data found");
        }
      })
      .catch((error) => {
        alert("error" + error);
      });
  }

  render() {
    return (
      <>
        <div className="profilContainer">
          <div className="profilPict-Container">
            <img
              src={this.state.profile_picture}
              className="profillPict"
              alt="profilePicture"
            />
          </div>
          <div className="profilDetail-Container">
            <h2>Nama Puskesmas</h2>
            {this.state.name}
            <h2>Aalamat</h2>
            <p>{this.state.address}</p>
            <h2>Kontak</h2>
            <h4>No HP : {this.state.phone}</h4>
            <h4>Email : {this.state.email}</h4>
          </div>
        </div>

        <Link to="/editProfile">Edit Profil</Link>

        <div className="profilShow">
          <div className="login-form-container">
            <label>Nama </label>
            <input
              type="text"
              placeholder="text"
              value={this.state.name}
              id="name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
            <label>Email </label>
            <input
              value={this.state.email}
              id="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              type="email"
              placeholder="Email"
            ></input>
            <label>Alamat </label>
            <input
              value={this.state.address}
              id="address"
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
              type="text"
              placeholder="Phone"
            ></input>
            <label>Phone </label>

            <input
              value={this.state.phone}
              id="phone"
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
              type="text"
              placeholder="Alamat"
            ></input>
            <label>Foto Profil </label>
            <input
              value={this.state.profile_picture}
              id="profilePicture"
              onChange={(e) => {
                this.setState({ profile_picture: e.target.value });
              }}
              type="text"
              placeholder="Image URL"
            ></input>

            <button id="addBtn" onClick={this.interface}>
              Simpan
            </button>
            <button id="selectBtn" onClick={this.interface}>
              Select
            </button>
          </div>
        </div>
      </>
    );
  }
}
