// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/layoutComponent";
import History from "./Pages/history";
import Home from "./Pages/home";
import PengukuranForm from "./Pages/pengukuran";
import Profil from "./Pages/profil";
import ProfilForm from "./Form/profilForm";
import Blank from "./Pages/blank";
import Detail from "./Pages/detail";

function Dashboard() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/informasi" element={<Profil />} />
            <Route path="/riwayat" element={<History />} />
            <Route path="/riwayat/:slug" element={<Detail />} />
            <Route path="/pengukuran" element={<PengukuranForm />} />
            <Route path="/formprofil" element={<ProfilForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
