import React from "react";
import { Link } from "react-router-dom";

import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="FaceBook mt-5">
      <img
        src={process.env.PUBLIC_URL + "fblogo.jpg"}
        className="flogo"
        alt="logo"
      />
      <h1 className="title">Facebook</h1>
      <div className="logindetails">
        <form>
          <p className="loginText">Login into Facebook</p>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="loginbtn">
              <Link to="/navbarAdmin" className="login">
            <button type="submit" className="btn btn-primary ">
                Login
            </button>
              </Link>
          </div>
          <div className="links">
            <a href="/"> Forgot Account?</a>
            <a href="/">Sign up for Facebook?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
