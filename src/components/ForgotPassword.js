import React from "react";

import "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="forgot ">
      <div className="forgot_form">
        <h4>Find Your Account</h4>
        <hr />
        <p className="mb-0">
          Please enter your email or mobile number to search for your account.
        </p>
        <div class="form-group sent_mail_form">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <hr />
        </div>
        <div className="form_button">
          <div className="button_right">
        
            <button type="button" className="btn btn_cancel">
              Cancel
            </button>
          
            <button type="button" className="btn btn_search">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
