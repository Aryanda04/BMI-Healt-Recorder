// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/layoutComponent";
// import Blank from './blank'
import Profil from "./Pages/profil";
import History from "./Pages/history";
import Home from "./Pages/home";
import ProfileForm from "./profileForm";
import SignIn from "./signin";

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
