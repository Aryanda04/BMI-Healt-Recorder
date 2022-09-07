// import {auth} from '../firebase'
import uniqid from "uniqid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";

// import puskesmasImg from "../../assets/puskesmas-assets.jpg";
import { writeUserData, db, auth } from "../../firebase";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Table,
  Container,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
const PengukuranForm = () => {
  let { slug } = useParams();
  console.log(slug);
  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [dataProfil, setDataProfil] = useState([]);
  const [dataUserId, setDataUserId] = useState();

  let navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(true);
  let [fetchStatus, setFetchStatus] = useState(true);

  // const [input, setInput] = useState({
  //   name: "",
  //   phone: "",
  //   tanggal_lahir: "",
  //   jenisKelamin: "",
  //   jenisKelamin_1: "",
  //   jenisKelamin_0: "",
  // });
  //   console.log(dataPengukuran);
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
      //   console.log(dataPengukuran);
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  const handleGender = (params) => {
    if (params === "1") {
      return "laki-laki";
    } else if (params === "0") {
      return "Perempuan";
    }
  };
  const handleDate = () => {
    const d = new Date();
    let bulanNow = "" + (d.getMonth() + 1);
    let TanggalNow = "" + d.getDate();
    let TahunNow = "" + d.getFullYear();
    if (bulanNow.length < 2) bulanNow = "0" + bulanNow;
    if (TanggalNow.length < 2) TanggalNow = "0" + TanggalNow;

    return `${TahunNow}${bulanNow}${TanggalNow}`;
  };

  const idPengukuran = handleDate();
  const handleKonstanta = () => {
    let sex = dataPengukuran.jenisKelamin;
    // console.log(sex);
    if (sex === "1") {
      return 0.8;
    } else {
      return 9.25;
    }
  };
  const handleAge = () => {
    const d = new Date();
    let bulanNow = "" + (d.getMonth() + 1);
    let TahunNow = "" + d.getFullYear();
    if (bulanNow.length < 2) bulanNow = "0" + bulanNow;

    const bornDate = dataPengukuran.tanggal_lahir;
    const bornYear = bornDate.slice(0, 4);
    const bornMonth = bornDate.slice(5, 7);
    const dateNow = parseInt(TahunNow * 12 + bulanNow);
    const dateBirth = parseInt(bornYear * 12 + bornMonth);
    console.log(dateNow);
    console.log(dateBirth);
    return (dateNow - dateBirth) / 100;
    //100 untuk menyesuaikan ada tambahan 0 pada bulan dengan char 1
  };
  const handleLBMCoeff = () => {
    const height = parseInt(dataPengukuran[idPengukuran]["TinggiBadan"]);
    const weight = parseInt(dataPengukuran[idPengukuran]["BeratBadan"]);
    const impedance = parseInt(dataPengukuran[idPengukuran]["Impedansi"]);
    const age = handleAge();
    console.log(age);
    let lbm = ((height * 9.058) / 100) * handleAge(height / 100);
    lbm += weight * 0.32 + 12.226;
    lbm -= impedance * 0.0068;
    lbm -= (age / 12) * 0.0542;
    // menghandle age dalam tahunan
    return lbm;
  };
  const bfp = () => {
    let sex = dataPengukuran.jenisKelamin;
    let weight = parseInt(dataPengukuran[idPengukuran]["BeratBadan"]);
    let konstanta = handleKonstanta();
    let LBM = handleLBMCoeff();
    let koef;
    if (sex === "1") {
      koef = 0.98;
    } else {
      koef = 1.02;
    }
    const FP = (1.0 - ((LBM - konstanta) * koef) / weight) * 100;

    return FP;
  };

  const writeUserData = (e) => {
    const userId = slug;
    setDataUserId(userId);
    e.preventDefault();
    let bodyFatPercentage = bfp();
    let BeratBadan = dataPengukuran[idPengukuran]["BeratBadan"];
    let TinggiBadan = dataPengukuran[idPengukuran]["TinggiBadan"];
    let Impedansi = dataPengukuran[idPengukuran]["Impedansi"];
    let IMT = dataPengukuran[idPengukuran]["IMT"];
    let umurBulan = handleAge();
    set(
      ref(
        db,
        `puskesmas/users/${auth.currentUser.uid}/pengukuran/${userId}/${idPengukuran}`
      ),
      {
        umurBulan: umurBulan,
        BeratBadan: BeratBadan,
        TinggiBadan: TinggiBadan,
        Impedansi: Impedansi,
        IMT: IMT,

        bodyFatPercentage: bodyFatPercentage,
      }
    );
    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/alat`), {
      alat: userId,
    });

    // navigate(`/pengukuran/${userId}`);
    // alert("berhasil menambahkan data");
    setFetchStatus(true);
    // if (dataPengukuran !== undefined) {
    // setShowModal(true);
    // }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate(`/pengukuran`);
    // location.reload();
  };
  const handleSubmit = () => {
    setShowModal(false);
    navigate(`/riwayat`);
  };

  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Detail Pengukuran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {" "}
            name :{" "}
            {dataPengukuran !== undefined
              ? dataPengukuran.name
              : "Lakukan Pengukuran"}
          </p>
          <p>
            {" "}
            jenisKelamin :{" "}
            {dataPengukuran !== undefined
              ? handleGender(dataPengukuran.jenisKelamin)
              : "Lakukan Pengukuran"}
          </p>
          <p>
            Tanggal Lahir :{" "}
            {dataPengukuran !== undefined
              ? dataPengukuran.tanggal_lahir
              : "Lakukan Pengukuran"}
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Berat Badan</th>
                <th>Tinggi Badan</th>
                <th>IMT</th>
                <th>%BF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {dataPengukuran[idPengukuran] !== undefined
                    ? dataPengukuran[idPengukuran]["BeratBadan"]
                    : "Lakukan Pengukuran"}
                </td>
                <td>
                  {dataPengukuran[idPengukuran] !== undefined
                    ? dataPengukuran[idPengukuran]["TinggiBadan"]
                    : "Lakukan Pengukuran"}
                </td>
                <td>
                  {dataPengukuran[idPengukuran] !== undefined
                    ? dataPengukuran[idPengukuran]["IMT"]
                    : "Lakukan Pengukuran"}
                </td>
                <td>
                  {dataPengukuran[idPengukuran] !== undefined
                    ? dataPengukuran[idPengukuran]["bodyFatPercentage"]
                    : "Lakukan Pengukuran"}
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary" onClick={() => setFetchStatus(true)}>
            Fetch Data
          </Button>
          <Button variant="primary" onClick={writeUserData}>
            Calculate
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PengukuranForm;
