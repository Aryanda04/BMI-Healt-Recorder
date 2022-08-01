import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home';
import SignIn from './components/signin';
import { auth } from './firebase';


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
      {user?<Home/>:<SignIn/>}
    </div>
  );
}

export default App;
