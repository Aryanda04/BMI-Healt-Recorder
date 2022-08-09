// import {auth} from '../firebase'
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";

import puskesmasImg from "../../assets/puskesmas-assets.jpg";
import { writeUserData, db, auth } from "../../firebase";
import convertLayerAtRulesToControlComments from "tailwindcss/lib/lib/convertLayerAtRulesToControlComments";

export class Pengukuran extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      db: "",
      name: "",
      tanggal_lahir: "",
    };
    this.interface = this.interface.bind(this);
  }
  componentDidMount() {
    this.setState({
      db: db,
      id: auth.currentUser.uid,
    });
  }

  render() {
    return (
      <>
        <div className="profilShow">
          <div className="login-form-container">
            <label>Nama </label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={this.state.name}
              id="name"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
            <label>Tanggal Lahir</label>
            <input
              value={this.state.tanggal_lahir}
              id="tanggalLahir"
              onChange={(e) => {
                this.setState({ tanggal_lahir: e.target.value });
              }}
              type="date"
              placeholder="Date"
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
      tanggal_lahir: this.state.tanggal_lahir,
    };
  }
  insertData() {
    const db = this.state.db;
    const id = this.state.id;
    const name = this.state.name;
    const data = this.getAllInputs();

    set(ref(db, "puskesmas/users/" + id + "/pengukuran/" + name), {
      name: data.name,
      tanggal_lahir: data.tanggal_lahir,
    })
      .then(() => {
        alert("data added success");
      })
      .catch((error) => {
        alert("there was an error, details: " + error);
      });
  }
  selectData() {
    const dbRef = ref(this.state.db);
    const id = this.state.id;

    get(child(dbRef, "puskesmas/users/" + id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({
            name: snapshot.val().name,
            tanggal_lahir: snapshot.val().tanggal_lahir,
          });
        } else {
          alert("no data found");
        }
      })
      .catch((error) => {
        alert("error" + error);
      });
  }
}
