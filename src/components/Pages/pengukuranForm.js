// import {auth} from '../firebase'
import uniqid from "uniqid";
import { Link, useNavigate } from "react-router-dom";
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
  const [dataPengukuran, setDataPengukuran] = useState([]);
  const [dataProfil, setDataProfil] = useState([]);
  const [dataUserId, setDataUserId] = useState();

  let navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  let [fetchStatus, setFetchStatus] = useState(false);

  const [input, setInput] = useState({
    name: "",
    phone: "",
    tanggal_lahir: "",
    jenisKelamin: "",
    jenisKelamin_1: "",
    jenisKelamin_0: "",
  });
  //   console.log(dataPengukuran);
  useEffect(() => {
    const dbRef = ref(db);
    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let result = data["pengukuran"][dataUserId];
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

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "jenisKelamin_1") {
      setInput({
        ...input,
        jenisKelamin_1: value,
        jenisKelamin_0: "",
        jenisKelamin: value,
      });
    } else if (name === "jenisKelamin_0") {
      setInput({
        ...input,
        jenisKelamin_0: value,
        jenisKelamin_1: "",
        jenisKelamin: value,
      });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const writeUserData = (e) => {
    const userId = uniqid();
    setDataUserId(userId);
    e.preventDefault();
    let { name, phone, tanggal_lahir, jenisKelamin } = input;
    // const d = new Date();
    // let bulan = d.getMonth() + 9;
    // let Tanggal = d.getDate();
    // let Tahun = d.getFullYear();
    // const idPengukuran = `${bulan}${Tanggal}${Tahun}`;
    // console.log(bulan + "/" + Tanggal + "/" + Tahun);
    // const umurBulan = dateFormatter(tanggal_lahir, Tahun, bulan);

    set(
      ref(db, `puskesmas/users/${auth.currentUser.uid}/pengukuran/${userId}`),
      {
        name: name,
        phone: phone,
        tanggal_lahir: tanggal_lahir,
        jenisKelamin: jenisKelamin,
      }
    );
    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/alat`), {
      alat: userId,
    });

    navigate(`/pengukuran/${userId}`);
    // alert("berhasil menambahkan data");
    setFetchStatus(true);
    // if (dataPengukuran !== undefined) {
    // setShowModal(true);
    // }
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
  const handleBack = (e) => {
    e.preventDefault();
    setShowModal(false);
    navigate(`/pengukuran`);
    // location.reload();
  };
  const idPengukuran = handleDate();

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h3">Masukkan Data</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md="10">
                <Form.Group>
                  <label>Nama</label>
                  <Form.Control
                    onChange={handleChange}
                    placeholder="Nama"
                    type="text"
                    name="name"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="4">
                <Form.Group>
                  <label>Tanggal Lahir</label>
                  <Form.Control
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    type="date"
                    name="tanggal_lahir"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Phone Number</label>
                  <Form.Control
                    name="phone"
                    value={input.phone}
                    onChange={handleChange}
                    placeholder="+62"
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Jenis Kelamin</label>
                  <Form.Check
                    onChange={handleChange}
                    label="Laki-Laki"
                    type="radio"
                    name="jenisKelamin_1"
                    value="1"
                  />
                  <Form.Check
                    onChange={handleChange}
                    label="Perempuan"
                    type="radio"
                    id="2"
                    name="jenisKelamin_0"
                    value="0"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              size="sm"
              className="btn-fill pull-right"
              variant="primary"
              onClick={writeUserData}
            >
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default PengukuranForm;
