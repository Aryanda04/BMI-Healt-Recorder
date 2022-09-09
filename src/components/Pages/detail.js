import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import ChartistGraph from "react-chartist";

import React, { useEffect, useState } from "react";
import { ref, set, child, get, update, remove } from "firebase/database";
import { db, auth } from "../../firebase";
import GrafikBBLakiLaki from "../Card/garfikBBLaki";
import GrafikTBLakiLaki from "../Card/grafikTBLaki";
import GrafikIMTLakiLaki from "../Card/grafikIMTLaki";
import GrafikBBPerempuan from "../Card/grafikBBPerempuan";
import GrafikTBPerempuan from "../Card/grafikTBPerempuan";
import GrafikIMTPerempuan from "../Card/grafikIMTPerempuan";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Tab,
  Tabs,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Blank from "./blank";
// const dataBBLaki = {

// }
const Detail = () => {
  let { slug } = useParams();
  const [dataPengukuran, setDataPengukuran] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);
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
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  console.log(dataPengukuran);
  // const keys = Object.keys(dataPengukuran);
  const handleGender = (params) => {
    if (params === "1") {
      return "laki-laki";
    } else if (params === "0") {
      return "Perempuan";
    }
  };
  // const style = {
  // stroke: "red";
  // stroke-width: "5px";
  // stroke-dasharray: "10px 20px";
  // }

  const keys = Object.keys(dataPengukuran);
  keys.slice(0, -4);
  console.log(keys);
  return (
    <>
      <Card>
        <Card.Header as="h3">
          Riwayat Pengukuran {dataPengukuran.name}
        </Card.Header>
        <h2>YYYY/MM/DD : {dataPengukuran.tanggal_lahir}</h2>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Berat Badan</th>
                <th>Tinggi Badan</th>
                <th>IMT</th>
                <th>Impedansi</th>
                <th>%BF</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key, index) => {
                const dataPengukuranUser = dataPengukuran[key];
                const objKeys = Object.keys(dataPengukuranUser).slice(0, -4);
                // const dataPengukuranX = objKeys.pop();
                // console.log(dataPengukuran["bodyFatPercentage"]);
                // console.log(dataPengukuranUser);
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td></td>
                      <td>{dataPengukuranUser.BeratBadan}</td>
                      <td>{dataPengukuranUser.TinggiBadan}</td>
                      <td>{dataPengukuranUser.IMT}</td>
                      <td>{dataPengukuranUser.Impedansi}</td>
                      <td>{dataPengukuranUser.bodyFatPercentage}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* <div className="ct-chart" id="chartHours">
        <ChartistGraph
          data={{
            labels: [
              "9:00AM",
              "12:00AM",
              "3:00PM",
              "6:00PM",
              "9:00PM",
              "12:00PM",
              "3:00AM",
              "6:00AM",
            ],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308],
            ],
          }}
          type="Line"
          options={{
            low: 0,
            high: 800,
            showArea: false,
            height: "245px",
            axisX: {
              showGrid: false,
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50,
            },
          }}
          responsiveOptions={[
            [
              "screen and (max-width: 640px)",
              {
                axisX: {
                  labelInterpolationFnc: function (value) {
                    return value[0];
                  },
                },
              },
            ],
          ]}
        />
      </div> */}
      {/* <div className="ct-chart" id="chartActivity">
        <ChartistGraph
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
            ],
          }}
          type="Bar"
          options={{
            seriesBarDistance: 10,
            axisX: {
              showGrid: false,
            },
            height: "245px",
          }}
          responsiveOptions={[
            [
              "screen and (max-width: 640px)",
              {
                seriesBarDistance: 5,
                axisX: {
                  labelInterpolationFnc: function (value) {
                    return value[0];
                  },
                },
              },
            ],
          ]}
        />
      </div> */}
      <Tabs
        defaultActiveKey="tinggiBadan"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="tinggiBadan" title="Tinggi Badan">
          {dataPengukuran.jenisKelamin === "1" ? (
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tinggi Badan</Card.Title>
                <p className="card-category">Laki-Laki</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          78.6, 79.3, 79.9, 80.5, 81.1, 81.7, 82.3, 82.8, 83.4,
                          83.9, 84.4, 85.0, 85.5, 86.0, 86.5, 87.0, 87.5, 88.0,
                          88.4, 88.9, 89.4, 89.8, 90.3, 90.7, 91.2, 91.6, 92.1,
                          92.5, 93.0, 93.4, 93.9, 94.3, 94.7, 95.2, 95.6, 96.1,
                        ],
                        [
                          81.7, 82.5, 83.1, 83.8, 84.5, 85.1, 85.7, 86.4, 86.9,
                          87.5, 88.1, 88.7, 89.2, 89.8, 90.3, 90.9, 91.4, 91.9,
                          92.4, 93.0, 93.5, 94.0, 94.4, 94.9, 95.4, 95.9, 96.4,
                          96.9, 97.4, 97.8, 98.3, 98.8, 99.3, 99.7, 100.2,
                          100.7,
                        ],
                        [
                          84.9, 85.6, 86.4, 87.1, 87.8, 88.5, 89.2, 89.9, 90.5,
                          91.1, 91.8, 92.4, 93.0, 93.6, 94.2, 94.7, 95.3, 95.9,
                          96.4, 97.0, 97.5, 98.1, 98.6, 99.1, 99.7, 100.2,
                          100.7, 101.2, 101.7, 102.3, 102.8, 103.3, 103.8,
                          104.3, 104.8, 105.3,
                        ],
                        [
                          88.0, 88.8, 89.6, 90.4, 91.2, 91.9, 92.7, 93.4, 94.1,
                          94.8, 95.4, 96.1, 96.7, 97.4, 98.0, 98.6, 99.2, 99.9,
                          100.4, 101.0, 101.6, 102.2, 102.8, 103.3, 103.9,
                          104.4, 105.0, 105.6, 106.1, 106.7, 107.2, 107.8,
                          108.3, 108.9, 109.4, 110.0,
                        ],
                        [
                          91.1, 92.0, 92.9, 93.7, 94.5, 95.3, 96.1, 96.9, 97.6,
                          98.4, 99.1, 99.8, 100.5, 101.2, 101.8, 102.5, 103.2,
                          103.8, 104.5, 105.1, 105.7, 106.3, 106.9, 107.5,
                          108.1, 108.7, 109.3, 109.9, 110.5, 111.1, 111.7,
                          112.3, 112.8, 113.4, 114.0, 114.6,
                        ],
                        [
                          94.2, 95.2, 96.1, 97.0, 97.9, 98.7, 99.6, 100.4,
                          101.2, 102.0, 102.7, 103.5, 104.2, 105.0, 105.7,
                          106.4, 107.1, 107.8, 108.5, 109.1, 109.8, 110.4,
                          111.1, 111.7, 112.4, 113.0, 113.6, 114.2, 114.9,
                          115.5, 116.1, 116.7, 117.4, 118.0, 118.6, 119.2,
                        ],
                        [
                          97.3, 98.3, 99.1, 100.3, 101.2, 102.1, 103.0, 103.9,
                          104.8, 105.6, 106.4, 107.2, 108.0, 108.8, 109.5,
                          110.3, 111.0, 111.7, 112.5, 113.2, 113.9, 114.6,
                          115.2, 115.9, 116.6, 117.3, 117.9, 118.6, 119.2,
                          119.9, 120.6, 121.2, 121.9, 122.6, 123.2, 123.9,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 70,
                      high: 130,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      classNames: {
                        chart: "ct-chart-line",
                        label: "ct-label",
                        labelGroup: "ct-labels",
                        series: "ct-series-g",
                        // series: "ct-series-b",

                        // line: "ct-line-b",
                        point: "ct-point",
                        area: "ct-area",
                        grid: "ct-grid",
                        gridGroup: "ct-grids",
                        vertical: "ct-vertical",
                        horizontal: "ct-horizontal",
                        start: "ct-start",
                        end: "ct-end",
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku tinggi badan anak laki-laki usia 25-60
                  bulan
                  {/* <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          ) : (
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tinggi Badan</Card.Title>
                <p className="card-category">Perempuan</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          76.8, 77.5, 78.1, 78.8, 79.5, 80.1, 80.7, 81.3, 81.9,
                          82.5, 83.1, 83.6, 84.2, 84.7, 85.3, 85.8, 86.3, 86.8,
                          87.4, 87.9, 88.4, 88.9, 89.3, 89.8, 90.3, 90.7, 91.2,
                          91.7, 92.1, 92.6, 93, 93.4, 93.9, 94.3, 94.7, 95.2,
                        ],
                        [
                          80, 80.8, 81.5, 82.2, 82.9, 83.6, 84.3, 84.9, 85.6,
                          86.2, 86.8, 87.4, 88, 88.6, 89.2, 89.8, 90.4, 90.9,
                          91.5, 92, 92.5, 93.1, 93.6, 94.1, 94.6, 95.1, 95.6,
                          96.1, 96.6, 97.1, 97.6, 98.1, 98.5, 99, 99.5, 99.9,
                        ],
                        [
                          83.3, 84.1, 84.9, 85.7, 86.4, 87.1, 87.9, 88.6, 89.3,
                          89.9, 90.6, 91.2, 91.9, 92.5, 93.1, 93.8, 94.4, 95,
                          95.6, 96.2, 96.7, 97.3, 97.9, 98.4, 99, 99.5, 100.1,
                          100.6, 101.1, 101.6, 102.2, 102.7, 103.2, 103.7,
                          104.2, 104.7,
                        ],
                        [
                          86.6, 87.4, 88.3, 89.1, 89.9, 90.7, 91.4, 92.2, 92.9,
                          93.6, 94.4, 95.1, 95.7, 96.4, 97.1, 97.7, 98.4, 99,
                          99.7, 100.3, 100.9, 101.5, 102.1, 102.7, 103.3, 103.9,
                          104.5, 105, 105.6, 106.2, 106.7, 107.3, 107.8, 108.4,
                          108.9, 109.4,
                        ],
                        [
                          89.9, 90.8, 91.7, 92.5, 93.4, 94.2, 95, 95.8, 96.6,
                          97.4, 98.1, 98.9, 99.6, 100.3, 101, 101.7, 102.4,
                          103.1, 103.8, 104.5, 105.1, 105.8, 106.4, 107, 107.7,
                          108.3, 108.9, 109.5, 110.1, 110.7, 111.3, 111.9,
                          112.5, 113, 113.6, 114.2,
                        ],
                        [
                          93.1, 94.1, 95, 96, 96.9, 97.7, 98.6, 99.4, 100.3,
                          101.1, 101.9, 102.7, 103.4, 104.2, 105, 105.7, 106.4,
                          107.2, 107.9, 108.6, 109.3, 110, 110.7, 111.3, 112,
                          112.7, 113.3, 114, 114.6, 115.2, 115.9, 116.5, 117.1,
                          117.7, 118.3, 118.9,
                        ],
                        [
                          96.4, 97.4, 98.4, 99.4, 100.3, 101.3, 102.2, 103.1,
                          103.9, 104.8, 105.6, 106.5, 107.3, 108.1, 108.9,
                          109.7, 110.5, 111.2, 112, 112.7, 113.5, 114.2, 114.9,
                          115.7, 116.4, 117.1, 117.7, 118.4, 119.1, 119.8,
                          120.4, 121.1, 121.8, 122.4, 123.1, 123.7,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 70,
                      high: 130,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      classNames: {
                        chart: "ct-chart-line",
                        label: "ct-label",
                        labelGroup: "ct-labels",
                        series: "ct-series-g",
                        // series: "ct-series-b",

                        // line: "ct-line-b",
                        point: "ct-point",
                        area: "ct-area",
                        grid: "ct-grid",
                        gridGroup: "ct-grids",
                        vertical: "ct-vertical",
                        horizontal: "ct-horizontal",
                        start: "ct-start",
                        end: "ct-end",
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku tinggi badan anak perempuan usia 25-60
                  bulan
                  {/* <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          )}
        </Tab>
        <Tab eventKey="beratBadan" title="Berat Badan">
          {dataPengukuran.jenisKelamin === "1" ? (
            <Card>
              <Card.Header>
                <Card.Title as="h4">Berat Badan</Card.Title>
                <p className="card-category">Laki-Laki</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          8.8, 8.9, 9.0, 9.1, 9.2, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9,
                          10.0, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8,
                          10.9, 11.0, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7,
                          11.8, 11.9, 12.0, 12.1, 12.2, 12.3, 12.4,
                        ],
                        [
                          9.8, 10.0, 10.1, 10.2, 10.4, 10.5, 10.7, 10.8, 10.9,
                          11.0, 11.2, 11.3, 11.4, 11.5, 11.6, 11.8, 11.9, 12.0,
                          12.1, 12.2, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.1,
                          13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 14.0, 14.1,
                        ],
                        [
                          11.0, 11.2, 11.3, 11.5, 11.7, 11.8, 12.0, 12.1, 12.3,
                          12.4, 12.6, 12.7, 12.9, 13.0, 13.1, 13.3, 13.4, 13.6,
                          13.7, 13.8, 14.0, 14.1, 14.3, 14.4, 14.5, 14.7, 14.8,
                          15.0, 15.1, 15.2, 15.4, 15.5, 15.6, 15.8, 15.9, 16.0,
                        ],
                        [
                          12.4, 12.5, 12.7, 12.9, 13.1, 13.3, 13.5, 13.7, 13.8,
                          14.0, 14.2, 14.3, 14.5, 14.7, 14.8, 15.0, 15.2, 15.3,
                          15.5, 15.7, 15.8, 16.0, 16.2, 16.3, 16.5, 16.7, 16.8,
                          17.0, 17.2, 17.3, 17.5, 17.7, 17.8, 18.0, 18.2, 18.3,
                        ],
                        [
                          13.9, 14.1, 14.3, 14.5, 14.8, 15.0, 15.2, 15.4, 15.6,
                          15.8, 16.0, 16.2, 16.4, 16.6, 16.8, 17.0, 17.2, 17.4,
                          17.6, 17.8, 18.0, 18.2, 18.4, 18.6, 18.8, 19.0, 19.2,
                          19.4, 19.6, 19.8, 20.0, 20.2, 20.4, 20.6, 20.8, 21.0,
                        ],
                        [
                          15.5, 15.8, 16.1, 16.3, 16.6, 16.9, 17.1, 17.4, 17.6,
                          17.8, 18.1, 18.3, 18.6, 18.8, 19.0, 19.3, 19.5, 19.7,
                          20.0, 20.2, 20.5, 20.7, 20.9, 21.2, 21.4, 21.7, 21.9,
                          22.2, 22.4, 22.7, 22.9, 23.2, 23.4, 23.7, 23.9, 24.2,
                        ],
                        [
                          17.5, 17.8, 18.1, 18.4, 18.7, 19.0, 19.3, 19.6, 19.9,
                          20.2, 20.4, 20.7, 21.0, 21.3, 21.6, 21.9, 22.1, 22.4,
                          22.7, 23.0, 23.3, 23.6, 23.9, 24.2, 24.5, 24.8, 25.1,
                          25.4, 25.7, 26.0, 26.3, 26.6, 26.9, 27.2, 27.6, 27.9,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      classNames: {
                        chart: "ct-chart-line",
                        label: "ct-label",
                        labelGroup: "ct-labels",
                        series: "ct-series-g",
                        // series: "ct-series-b",

                        // line: "ct-line-b",
                        point: "ct-point",
                        area: "ct-area",
                        grid: "ct-grid",
                        gridGroup: "ct-grids",
                        vertical: "ct-vertical",
                        horizontal: "ct-horizontal",
                        start: "ct-start",
                        end: "ct-end",
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku berat badan anak laki-laki usia 25-60
                  bulan
                  {/* <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          ) : (
            <Card>
              <Card.Header>
                <Card.Title as="h4">Berat Badan</Card.Title>
                <p className="card-category">Perempuan</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          8.2, 8.4, 8.5, 8.6, 8.8, 8.9, 9, 9.1, 9.3, 9.4, 9.5,
                          9.6, 9.7, 9.8, 9.9, 10.1, 10.2, 10.3, 10.4, 10.5,
                          10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3, 11.4,
                          11.5, 11.6, 11.7, 11.8, 11.9, 12, 12.1,
                        ],
                        [
                          9.2, 9.4, 9.5, 9.7, 9.8, 10, 10.1, 10.3, 10.4, 10.5,
                          10.7, 10.8, 10.9, 11.1, 11.2, 11.3, 11.5, 11.6, 11.7,
                          11.8, 12, 12.1, 12.2, 12.3, 12.4, 12.6, 12.7, 12.8,
                          12.9, 13, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7,
                        ],
                        [
                          10.3, 10.5, 10.7, 10.9, 11.1, 11.2, 11.4, 11.6, 11.7,
                          11.9, 12, 12.2, 12.4, 12.5, 12.7, 12.8, 13, 13.1,
                          13.3, 13.4, 13.6, 13.7, 13.9, 14, 14.2, 14.3, 14.5,
                          14.6, 14.8, 14.9, 15.1, 15.2, 15.3, 15.5, 15.6, 15.8,
                        ],
                        [
                          11.7, 11.9, 12.1, 12.3, 12.5, 12.7, 12.9, 13.1, 13.3,
                          13.5, 13.7, 13.9, 14, 14.2, 14.4, 14.6, 14.8, 15,
                          15.2, 15.3, 15.5, 15.7, 15.9, 16.1, 16.3, 16.4, 16.6,
                          16.8, 17, 17.2, 17.3, 17.5, 17.7, 17.9, 18, 18.2,
                        ],
                        [
                          13.3, 13.5, 13.7, 14, 14.2, 14.4, 14.7, 14.9, 15.1,
                          15.4, 15.6, 15.8, 16, 16.3, 16.5, 16.7, 16.9, 17.2,
                          17.4, 17.6, 17.8, 18.1, 18.3, 18.5, 18.8, 19, 19.2,
                          19.4, 19.7, 19.9, 20.1, 20.3, 20.6, 20.8, 21, 21.2,
                        ],
                        [
                          15.1, 15.4, 15.7, 16, 16.2, 16.5, 16.8, 17.1, 17.3,
                          17.6, 17.9, 18.1, 18.4, 18.7, 19, 19.2, 19.5, 19.8,
                          20.1, 20.4, 20.7, 20.9, 21.2, 21.5, 21.8, 22.1, 22.4,
                          22.6, 22.9, 23.2, 23.5, 23.8, 24.1, 24.4, 24.6, 24.9,
                        ],
                        [
                          17.3, 17.7, 18, 18.3, 18.7, 19, 19.3, 19.6, 20, 20.3,
                          20.6, 20.9, 21.3, 21.6, 22, 22.3, 22.7, 23, 23.4,
                          23.7, 24.1, 24.5, 24.8, 25.2, 25.5, 25.9, 26.3, 26.6,
                          27, 27.4, 27.7, 28.1, 28.5, 28.8, 29.2, 29.5,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 30,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      classNames: {
                        chart: "ct-chart-line",
                        label: "ct-label",
                        labelGroup: "ct-labels",
                        series: "ct-series-g",
                        // series: "ct-series-b",

                        // line: "ct-line-b",
                        point: "ct-point",
                        area: "ct-area",
                        grid: "ct-grid",
                        gridGroup: "ct-grids",
                        vertical: "ct-vertical",
                        horizontal: "ct-horizontal",
                        start: "ct-start",
                        end: "ct-end",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku berat badan anak perempuan usia 25-60
                  bulan
                  {/* <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time */}
                </div>
                {/* <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          )}
        </Tab>
        <Tab eventKey="IMT" title="IMT">
          {dataPengukuran.jenisKelamin === "1" ? (
            <Card>
              <Card.Header>
                <Card.Title as="h4">IMT</Card.Title>
                <p className="card-category">Laki-Laki</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          12.8, 12.8, 12.8, 12.7, 12.7, 12.7, 12.6, 12.6, 12.5,
                          12.5, 12.5, 12.4, 12.4, 12.4, 12.3, 12.3, 12.3, 12.2,
                          12.2, 12.2, 12.2, 12.2, 12.1, 12.1, 12.1, 12.1, 12.1,
                          12.1, 12, 12, 12, 12, 12, 12, 12, 12,
                        ],
                        [
                          13.8, 13.7, 13.7, 13.6, 13.6, 13.6, 13.5, 13.5, 13.5,
                          13.4, 13.4, 13.4, 13.3, 13.3, 13.3, 13.2, 13.2, 13.2,
                          13.2, 13.1, 13.1, 13.1, 13.1, 13.1, 13, 13, 13, 13,
                          13, 13, 13, 12.9, 12.9, 12.9, 12.9, 12.9,
                        ],
                        [
                          14.8, 14.8, 14.7, 14.7, 14.7, 14.6, 14.6, 14.6, 14.5,
                          14.5, 14.5, 14.4, 14.4, 14.4, 14.3, 14.3, 14.3, 14.3,
                          14.2, 14.2, 14.2, 14.2, 14.2, 14.1, 14.1, 14.1, 14.1,
                          14.1, 14.1, 14, 14, 14, 14, 14, 14, 14,
                        ],
                        [
                          16, 15.9, 15.9, 15.9, 15.8, 15.8, 15.8, 15.7, 15.7,
                          15.7, 15.6, 15.6, 15.6, 15.5, 15.5, 15.5, 15.5, 15.4,
                          15.4, 15.4, 15.4, 15.4, 15.3, 15.3, 15.3, 15.3, 15.3,
                          15.3, 15.3, 15.3, 15.2, 15.2, 15.2, 15.2, 15.2, 15.2,
                        ],
                        [
                          17.3, 17.3, 17.2, 17.2, 17.1, 17.1, 17.1, 17, 17, 17,
                          16.9, 16.9, 16.9, 16.8, 16.8, 16.8, 16.8, 16.8, 16.7,
                          16.7, 16.7, 16.7, 16.7, 16.7, 16.7, 16.7, 16.6, 16.6,
                          16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6, 16.6,
                        ],
                        [
                          18.8, 18.8, 18.7, 18.7, 18.6, 18.6, 18.5, 18.5, 18.5,
                          18.4, 18.4, 18.4, 18.3, 18.3, 18.3, 18.2, 18.2, 18.2,
                          18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.2,
                          18.2, 18.2, 18.2, 18.2, 18.2, 18.2, 18.3, 18.3, 18.3,
                        ],
                        [
                          20.5, 20.5, 20.4, 20.4, 20.3, 20.2, 20.2, 20.1, 20.1,
                          20, 20, 20, 19.9, 19.9, 19.9, 19.9, 19.9, 19.8, 19.8,
                          19.8, 19.8, 19.8, 19.9, 19.9, 19.9, 19.9, 19.9, 19.9,
                          20, 20, 20, 20.1, 20.1, 20.2, 20.2, 20.3,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 10,
                      high: 25,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      classNames: {
                        series: "ct-series-g",
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku IMT anak laki-laki usia 25-60 bulan
                  {/* <i className="fas fa-circle text-info"></i>
              Open <i className="fas fa-circle text-danger"></i>
              Click <i className="fas fa-circle text-warning"></i>
              Click Second Time */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
              <i className="fas fa-history"></i>
              Updated 3 minutes ago
            </div> */}
              </Card.Footer>
            </Card>
          ) : (
            <Card>
              <Card.Header>
                <Card.Title as="h4">IMT</Card.Title>
                <p className="card-category">Perempuan</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart"
                  id="chartHours"
                  style={{ stroke: "red" }}
                  // {stroke-width: 5px}

                  // stroke-dasharray: 10px 20px;
                >
                  <ChartistGraph
                    data={{
                      labels: [
                        "25",
                        "26",
                        "27",
                        "28",
                        "29",
                        "30",
                        "31",
                        "32",
                        "33",
                        "34",
                        "35",
                        "36",
                        "37",
                        "38",
                        "39",
                        "40",
                        "41",
                        "42",
                        "43",
                        "44",
                        "45",
                        "46",
                        "47",
                        "48",
                        "49",
                        "50",
                        "51",
                        "52",
                        "53",
                        "54",
                        "55",
                        "56",
                        "57",
                        "58",
                        "59",
                        "60",
                      ],
                      series: [
                        [
                          12.4, 12.3, 12.3, 12.3, 12.3, 12.3, 12.2, 12.2, 12.2,
                          12.2, 12.1, 12.1, 12.1, 12.1, 12, 12, 12, 12, 11.9,
                          11.9, 11.9, 11.9, 11.8, 11.8, 11.8, 11.8, 11.8, 11.7,
                          11.7, 11.7, 11.7, 11.7, 11.7, 11.7, 11.6, 11.6,
                        ],
                        [
                          13.3, 13.3, 13.3, 13.3, 13.2, 13.2, 13.2, 13.2, 13.1,
                          13.1, 13.1, 13.1, 13.1, 13, 13, 13, 13, 12.9, 12.9,
                          12.9, 12.9, 12.9, 12.8, 12.8, 12.8, 12.8, 12.8, 12.8,
                          12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7, 12.7,
                        ],
                        [
                          14.4, 14.4, 14.4, 14.3, 14.3, 14.3, 14.3, 14.3, 14.2,
                          14.2, 14.2, 14.2, 14.1, 14.1, 14.1, 14.1, 14.1, 14,
                          14, 14, 14, 14, 14, 14, 13.9, 13.9, 13.9, 13.9, 13.9,
                          13.9, 13.9, 13.9, 13.9, 13.9, 13.9, 13.9,
                        ],
                        [
                          15.7, 15.6, 15.6, 15.6, 15.6, 15.5, 15.5, 15.5, 15.5,
                          15.4, 15.4, 15.4, 15.4, 15.4, 15.3, 15.3, 15.3, 15.3,
                          15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3,
                          15.2, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3, 15.3,
                        ],
                        [
                          17.1, 17, 17, 17, 17, 16.9, 16.9, 16.9, 16.9, 16.8,
                          16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8,
                          16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8, 16.8,
                          16.8, 16.8, 16.8, 16.8, 16.9, 16.9, 16.9, 16.9,
                        ],
                        [
                          18.7, 18.7, 18.6, 18.6, 18.6, 18.5, 18.5, 18.5, 18.5,
                          18.5, 18.4, 18.4, 18.4, 18.4, 18.4, 18.4, 18.4, 18.4,
                          18.4, 18.5, 18.5, 18.5, 18.5, 18.5, 18.5, 18.6, 18.6,
                          18.6, 18.6, 18.7, 18.7, 18.7, 18.7, 18.8, 18.8, 18.8,
                        ],
                        [
                          20.6, 20.6, 20.5, 20.5, 20.4, 20.4, 20.4, 20.4, 20.3,
                          20.3, 20.3, 20.3, 20.3, 20.3, 20.3, 20.3, 20.4, 20.4,
                          20.4, 20.4, 20.5, 20.5, 20.5, 20.6, 20.6, 20.7, 20.7,
                          20.7, 20.8, 20.8, 20.9, 20.9, 21, 21, 21, 21.1,
                        ],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 10,
                      high: 25,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      classNames: {
                        series: "ct-series-g",
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: false,
                      fullWidth: true,
                      chartColor: {
                        a: "red",
                      },
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            showLabel: false,
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  Grafik simpangan baku IMT anak perempuan usia 25-60 bulan
                  {/* <i className="fas fa-circle text-info"></i>
            Open <i className="fas fa-circle text-danger"></i>
            Click <i className="fas fa-circle text-warning"></i>
            Click Second Time */}
                </div>
                {/* <hr></hr> */}
                {/* <div className="stats">
            <i className="fas fa-history"></i>
            Updated 3 minutes ago
          </div> */}
              </Card.Footer>
            </Card>
          )}
        </Tab>
        {/* <Tab eventKey="contact" title="Contact">
          <GrafikIMTLakiLaki />
        </Tab> */}
      </Tabs>
    </>
  );
};

export default Detail;
