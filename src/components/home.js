import React from "react";
import { auth } from "../firebase";
import CardLineChart from "./Chart/lineChart";
import ProfileForm from "./profileForm";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <h1>Selamat Datang </h1>
        <CardLineChart />
      </div>
    </>
  );
};

export default Home;
