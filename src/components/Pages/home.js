import React from "react";
import GrafikIMTLakiLaki from "../Card/grafikIMTLaki";
import GrafikTBLakiLaki from "../Card/grafikTBLaki";
import RiwayatPengukuranCard from "../Card/riwayatPengukuranCard";
import Highcharts from "highcharts";
import Maps from "../Card/maps";
import MapsObesitas from "../Card/mapsBB";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <div className="dashboardContainer">
        <Carousel>
          <Carousel.Item>
            <div className="container">
              <Maps />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <MapsObesitas />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
