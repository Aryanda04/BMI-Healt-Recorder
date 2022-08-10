import React from "react";

const riwayatCard = ({ val }) => {
  return (
    <div className="riwayatCard">
      <div className="left">
        <h2>{{ val }.nama}</h2>
        <h4>{{ val }.umur} Tahun</h4>
      </div>
      <div className="right">
        {/* <h5>Berat Badan :{item.beratBadan}</h5>
      <h5>Tinggi Badan :{item.tinggiBadan}</h5> */}
      </div>
    </div>
  );
};
export default riwayatCard;
