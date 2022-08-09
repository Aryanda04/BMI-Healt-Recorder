import { useEffect, useState } from "react";
import "./App.css";
import { getAuth } from "firebase/auth";
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        // console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return <div className="App">{user ? <Dashboard /> : <SignIn />}</div>;
}

export default App;
