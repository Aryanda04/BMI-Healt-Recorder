// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/layoutComponent';
import Blank from './blank'
import Profile from './profile';

function Dashboard() {
  return (
    <div className="App">
              <BrowserRouter>
            <Routes>
              
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/profile' element={ <Profile/>} />
                    <Route path='/riwayat' element={<Blank />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
      
    </div>
  );
}

export default Dashboard;
