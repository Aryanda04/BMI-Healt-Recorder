// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/layoutComponent";
// import Blank from './blank'
import Profil from "./profil";
import History from "./history";
import Home from "./home";

function Dashboard() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profil />} />
            <Route path="/riwayat" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
