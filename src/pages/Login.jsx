// import React from 'react'
import "./login.css";
import netflixlogo from "../assets/netfilxlogo.png";

function Login() {
  return (
    <>
      <div className="login-det">
        <div className="details">
          <div className="login-container">
            <img src={netflixlogo} alt="Netflix-logo" className="side-logo"/>
          </div>

          <h1>Sign In</h1>
          <input type="text" placeholder="enter email id"></input>
          <input type="text" placeholder="enter password"></input>
          <button>sign in</button>
        </div>
      </div>
    </>
  );
}

export default Login;
