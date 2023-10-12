import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import "./RegisterAndLogin.css";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home")
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/Home")
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }

  return (
    <div className="App">
      {/* Registration and login Screen */}
      <div className="row">
        <div
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          Sign Up
        </div>
        <div
          className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          Sign In
        </div>
      </div>
      <h1>{login ? "Sign In" : "Sign Up"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="text" placeholder="Password" />
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
        <button>{login ? "Sign In" : "Sign Up"}</button>
      </form>
    </div>
  );
}
export default RegisterAndLogin;