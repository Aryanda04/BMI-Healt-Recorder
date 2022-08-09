// import {auth} from '../firebase'
const History = () => {
  const riwayatPengukuran = [
    {
      nama: "Andika",
      umur: "80",
      beratBadan: "30",
      tinggiBadan: "200",
    },
    {
      nama: "Andikaa",
      umur: "801",
      beratBadan: "30",
      tinggiBadan: "200",
    },
    {
      nama: "Andikaaa",
      umur: "802",
      beratBadan: "30324",
      tinggiBadan: "204320",
    },
  ];
  return (
    <>
      <div className="riwayatContainer">
        <h1>RIWAYAT PENGUKURAN</h1>
        <section className="riwayatPengukuran">
          {riwayatPengukuran.map((item) => (
            <div className="riwayatCard">
              <div className="left">
                <h2>{item.nama}</h2>
                <h4>{item.umur} Tahun</h4>
              </div>
              <div className="right">
                <h5>Berat Badan :{item.beratBadan}</h5>
                <h5>Tinggi Badan :{item.tinggiBadan}</h5>
              </div>{" "}
            </div>
          ))}
          {/* <button onClick={()=>auth.signOut()}>Logout</button> */}
        </section>
      </div>
    </>
  );
};

export default History;
