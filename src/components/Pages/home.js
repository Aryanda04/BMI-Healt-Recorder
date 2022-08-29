import React from "react";
import GrafikIMTLakiLaki from "../Card/grafikIMTLaki";
import GrafikTBLakiLaki from "../Card/grafikTBLaki";
import RiwayatPengukuranCard from "../Card/riwayatPengukuranCard";
import Highcharts from "highcharts";
import Maps from "../Card/maps";
import MapsObesitas from "../Card/mapsBB";

const Home = () => {
  return (
    <>
      <div className="dashboardContainer">
        <h1>Selamat Datang</h1>
        <Maps />
        <MapsObesitas />
      </div>
    </>
  );
};

export default Home;
