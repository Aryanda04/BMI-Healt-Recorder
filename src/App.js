import { useEffect, useState } from "react";
// import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";
import "./styles/signin.css";

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  // console.log(user);
  return <div className="App">{user ? <Dashboard /> : <SignIn />}</div>;
}

export default App;
