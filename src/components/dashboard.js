// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/layoutComponent";
import History from "./Pages/history";
import Home from "./Pages/home";
import PengukuranForm from "./Pages/pengukuranForm";
import Profil from "./Pages/profil";
import ProfilForm from "./Form/profilForm";
import Blank from "./Pages/blank";
import Detail from "./Pages/detail";
import Pengukuran from "./Pages/pengukuran";
import DumyDetail from "./Pages/DummyDetail";

function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/informasi" element={<Profil />} />
            <Route path="/riwayat" element={<History />} />
            <Route path="/riwayat/:slug" element={<Detail />} />
            <Route path="/riwayat/dmy123" element={<DumyDetail />} />

            <Route path="/pengukuran" element={<PengukuranForm />} />
            <Route path="/pengukuran/:slug" element={<Pengukuran />} />
            <Route path="/formprofil" element={<ProfilForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
