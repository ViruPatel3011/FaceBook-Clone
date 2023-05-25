import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="FaceBook">
     <img src={process.env.PUBLIC_URL+"fblogo.jpg"}  className="flogo"/>
      <h1 className="title">Facebook</h1>
      <div className="logindetails">
        <form>
          <p className="loginText">Login into Facebook</p>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
           
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="loginbtn">
            <button type="submit" class="btn btn-primary">
              <span className="login">Login</span>
            </button>
          </div>
          <div className="links"> 
          <a href="/" > Forgot Account?</a>
          <a href="/" >Sign up for Facebook?</a>
          </div>
     
        </form>
      </div>
    </div>
  );
}
