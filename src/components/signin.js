import loginPicture from "../assets1/loginPicture.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      //   navigate("/profile", { replace: true });
      //   this.props.history.push("/profile");
      //   console.log(user.uid);
    }
  }, [user, loading]);
  return (
    <>
      <div class="login-page-container">
        <div class="login-page-left">
          <img src={loginPicture} alt="Login Picture Image" />
        </div>
        <div class="login-page-right">
          <form action="">
            <h1>Login</h1>
            <div className="login-form-container">
              <label>Email </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label>Password </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              ></input>

              <button
                onClick={(e) => logInWithEmailAndPassword(email, password, e)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
