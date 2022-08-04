import { useEffect, useState } from 'react';
import './App.css';
// import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/signin';
import { auth } from './firebase';
import AppLayout from './components/layout/layoutComponent';
// import Blank from './components/blank'
import Dashboard from './components/dashboard';

function App() {
  const[user,setUser]=useState(null)
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user={
        uid:userAuth?.uid,
        email:userAuth?.email
      }
      if(userAuth){
        console.log(userAuth)
        setUser(user)
      }else{
        setUser(null)
      }
    })
    return unsubscribe
  },[])
  return (
    <div className="App">
{user?<Dashboard/>:<SignIn/>}

        
      
    </div>
  );
}

export default App;
