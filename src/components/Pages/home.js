import React from "react";
import CardLineChart from "../Card/lineChart";
import RiwayatPengukuranCard from "../Card/riwayatPengukuranCard";

const Home = () => {
  return (
    <>
      <div className="dashboardContainer">
        <h1>Selamat Datang</h1>
        {/* <div className="homeContainer"> */}
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4"></div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <RiwayatPengukuranCard />
          </div>
          <div className="w-full xl:w-4/12 px-4"></div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
