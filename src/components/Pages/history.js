import { Link, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
const History = () => {
  let navigate = useNavigate();

  const [dataPengukuran, setDataPengukuran] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    const dbRef = ref(db);
    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let result = data["pengukuran"];
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
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  const handleWaktuPengukuran = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return `${day}-${month}-${year}`;
  };
  const handleGender = (params) => {
    if (params === 1) {
      return "laki-laki";
    } else if (params === 0) {
      return "Perempuan";
    }
  };
  const handleShowDetail = (e) => {
    let userId = e.target.getAttribute("value");
    console.log(userId);
    navigate(`/riwayat/${userId}`);
    console.log("BERHASIL");
  };

  const mulaiPengukuran = (e) => {
    // e.preventdefault();
    // console.log(event);
    let userId = e.target.value;
    // console.log(userId);

    navigate(`/pengukuran/${userId}`);
  };

  const keys = Object.keys(dataPengukuran);
  return (
    <>
      {dataPengukuran === undefined ? (
        "Silahkan Lakukan Pengukuran "
      ) : (
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Riwayat Pengukuran</Card.Title>
                  <p className="card-category">Riwayat Pengukuran Terakhir</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table responsive="sm" className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">No</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Waktu Pengukuran</th>
                        {/* <th className="border-0">Umur (Bulan)</th> */}
                        <th className="border-0">Berat Badan</th>
                        <th className="border-0">Tinggi Badan</th>
                        <th className="border-0">IMT</th>
                        <th className="border-0">Impedansi</th>

                        <th className="border-0">%BF</th>
                        <th className="border-0">Utils</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mawrizka Dwi Aryani</td>
                        <td>05-09-2022</td>
                        {/* <td>
                        {dataPengukuranTerbaru !== undefined
                          ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                              "umurBulan"
                            ]
                          : "-"}
                      </td> */}
                        <td>16.8</td>
                        <td>73</td>
                        <td>21.7</td>
                        <td>723.7</td>
                        <td>24.954</td>
                        <td>
                          {" "}
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-577232198">
                                Pengukuran
                              </Tooltip>
                            }
                          >
                            <Button
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="primary"
                              // onClick={mulaiPengukuran}
                            >
                              Ukur
                              {/* <i className="fas fa-plus" value={key}></i> */}
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-773861645">Detail</Tooltip>
                            }
                          >
                            <Button
                              // value={key}
                              onClick={() => {
                                navigate("/riwayat/dmy123");
                              }}
                              className="btn-simple btn-link p-1"
                              type="button"
                              variant="success"
                            >
                              Detail
                              {/* <i className="fas fa-info"></i> */}
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      {keys.map((key, index) => {
                        // console.log(key);
                        const dataPengukuranBulanIni = dataPengukuran[key];
                        const objKeys = Object.keys(
                          dataPengukuranBulanIni
                        ).slice(0, -4);
                        // console.log(objKeys);
                        const dataPengukuranTerbaru = objKeys.pop();
                        console.log(dataPengukuranTerbaru);
                        return (
                          <>
                            <tr>
                              <td>{index + 2}</td>
                              <td>{dataPengukuranBulanIni.name}</td>
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? handleWaktuPengukuran(dataPengukuranTerbaru)
                                  : "Lakukan Pengukuran"}
                              </td>
                              {/* <td>
                              {dataPengukuranTerbaru !== undefined
                                ? dataPengukuranBulanIni[dataPengukuranTerbaru][
                                    "umurBulan"
                                  ]
                                : "-"}
                            </td> */}
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? dataPengukuranBulanIni[
                                      dataPengukuranTerbaru
                                    ]["BeratBadan"]
                                  : "-"}
                              </td>
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? dataPengukuranBulanIni[
                                      dataPengukuranTerbaru
                                    ]["TinggiBadan"]
                                  : "-"}
                              </td>
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? dataPengukuranBulanIni[
                                      dataPengukuranTerbaru
                                    ]["IMT"]
                                  : "-"}
                              </td>
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? dataPengukuranBulanIni[
                                      dataPengukuranTerbaru
                                    ]["Impedansi"]
                                  : "-"}
                              </td>
                              <td>
                                {dataPengukuranTerbaru !== undefined
                                  ? dataPengukuranBulanIni[
                                      dataPengukuranTerbaru
                                    ]["bodyFatPercentage"].toFixed(2)
                                  : "-"}
                              </td>
                              <td value={key}>
                                {" "}
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id="tooltip-577232198">
                                      Pengukuran
                                    </Tooltip>
                                  }
                                >
                                  <Button
                                    className="btn-simple btn-link p-1"
                                    type="button"
                                    value={key}
                                    variant="primary"
                                    onClick={mulaiPengukuran}
                                  >
                                    Ukur
                                    {/* <i className="fas fa-plus" value={key}></i> */}
                                  </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                  overlay={
                                    <Tooltip id="tooltip-773861645">
                                      Detail
                                    </Tooltip>
                                  }
                                >
                                  <Button
                                    value={key}
                                    onClick={handleShowDetail}
                                    className="btn-simple btn-link p-1"
                                    type="button"
                                    variant="success"
                                  >
                                    Detail
                                    {/* <i className="fas fa-info"></i> */}
                                  </Button>
                                </OverlayTrigger>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default History;
