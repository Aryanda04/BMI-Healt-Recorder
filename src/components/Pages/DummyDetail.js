import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import ChartistGraph from "react-chartist";
import * as Highcharts from "highcharts";

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
const DumyDetail = () => {
  return (
    <>
      <Card>
        <Card.Header as="h3">
          Riwayat Pengukuran Mawrizka Dwi Aryani
        </Card.Header>
        <Card.Body>
          <Table responsive="sm" striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Berat Badan</th>
                <th>Tinggi Badan</th>
                <th>IMT</th>
                <th>%BF</th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr>
                  <td>1</td>
                  <td>18-06-2022</td>
                  <td>15.7</td>
                  <td>72</td>
                  <td>20.2</td>
                  <td>24.776</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>15-08-2022</td>
                  <td>16.5</td>
                  <td>72.4</td>
                  <td>21.5</td>
                  <td>25.333</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>05-09-2022</td>
                  <td>16.8</td>
                  <td>73</td>
                  <td>21.7</td>
                  <td>24.954</td>
                </tr>
              </>
            </tbody>
          </Table>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title as="h4">Berat Badan</Card.Title>
          <p className="card-category">Perempuan</p>
        </Card.Header>
        <Card.Body>
          <GrafikBBPerempuan />
        </Card.Body>
        <Card.Footer>
          <div className="legend">
            Grafik simpangan baku Berat Badan anak perempuan usia 25-60 bulan
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
      <Card>
        <Card.Header>
          <Card.Title as="h4">Tinggi Badan</Card.Title>
          <p className="card-category">Perempuan</p>
        </Card.Header>
        <Card.Body>
          <GrafikTBPerempuan />
        </Card.Body>
        <Card.Footer>
          <div className="legend">
            Grafik simpangan baku tinggi badan anak perempuan usia 25-60 bulan
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
      <Card>
        <Card.Header>
          <Card.Title as="h4">IMT</Card.Title>
          <p className="card-category">Perempuan</p>
        </Card.Header>
        <Card.Body>
          <GrafikIMTPerempuan />
        </Card.Body>
        <Card.Footer>
          <div className="legend">
            Grafik simpangan baku tinggi badan anak perempuan usia 25-60 bulan
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
    </>
  );
};

export default DumyDetail;
