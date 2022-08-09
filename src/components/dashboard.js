// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/layoutComponent";
// import Blank from './blank'
import History from "./Pages/history";
import Home from "./Pages/home";
import ProfileForm from "./profileForm";
import SignIn from "./signin";
import { Profil } from "./Pages/profil";
import { Pengukuran } from "./Pages/pengukuran";

function Dashboard() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/riwayat" element={<History />} />
            <Route path="/pengukuran" element={<Pengukuran />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
