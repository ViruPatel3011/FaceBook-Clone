import React, { useState } from "react";

import "./NavbarAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Modal } from "react-bootstrap";

import { Facebook } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";

export default function NavbarAdmin() {
  const btnStyle = {
    fontWeight: "bold",
    fontSize: "15px",
    margin: "0 10px",
  };
  const userProfile = {
    height: "100px",
    width: "100px",
    borderRadius:'50%'
  };
  const userName = {
    margin: "31px 14px",
    fontSize: "16px",
  };
  const adminProfile = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  };

  const [isShow, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };
  return (
    <div>
      <nav>
        <ul>
          <li id="fb">
            <Facebook />{" "}
          </li>
          <div className="d-flex search-box">
            <li>
              {" "}
              <Search />{" "}
            </li>
            <input type="text" name="" id="" placeholder="Search FaceBook" />
          </div>

          <li id="space2"></li>
          <button
            type="button"
            className="btn btn-light UserBtn"
            style={btnStyle}
            onClick={handleModalOpen}
          >
            Users
          </button>
          <button
            type="button"
            className="btn btn-light UserBtn"
            style={btnStyle}
            onClick={handleModalOpen}
          >
            Add User
          </button>

          <Modal show={isShow} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Users</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex userSection">
                <div className="flex-grow-1 d-flex" style={userProfile}>
                  <img
                    src={process.env.PUBLIC_URL + "profile.jpg"}
                    className="flogo"
                    alt="profileimage"
                    style={userProfile}
                  />
                  <h4 style={userName}>Viral Patel</h4>
                </div>
                <div>
                <button type="button" class="btn btn-success ms-1">Confirm</button>
                <button type="button" class="btn btn-dark ms-1">Not Now</button>
                </div>
              </div>
              <div className="d-flex userSection">
                <div className="flex-grow-1 d-flex" style={userProfile}>
                  <img
                    src={process.env.PUBLIC_URL + "profile.jpg"}
                    className="flogo"
                    alt="profileimage"
                    style={userProfile}
                  />
                  <h4 style={userName}>Viral Patel</h4>
                </div>
                <div>
                <button type="button" class="btn btn-success ms-1">Confirm</button>
                <button type="button" class="btn btn-dark ms-1">Not Now</button>
                </div>
              </div>
              <div className="d-flex userSection">
                <div className="flex-grow-1 d-flex" style={userProfile}>
                  <img
                    src={process.env.PUBLIC_URL + "profile.jpg"}
                    className="flogo"
                    alt="profileimage"
                    style={userProfile}
                  />
                  <h4 style={userName}>Viral Patel</h4>
                </div>
                <div>
                <button type="button" class="btn btn-success ms-1">Confirm</button>
                <button type="button" class="btn btn-dark ms-1">Not Now</button>
                </div>
              </div>
              <div className="d-flex userSection">
                <div className="flex-grow-1 d-flex" style={userProfile}>
                  <img
                    src={process.env.PUBLIC_URL + "profile.jpg"}
                    className="flogo"
                    alt="profileimage"
                    style={userProfile}
                  />
                  <h4 style={userName}>Viral Patel</h4>
                </div>
                <div>
                <button type="button" class="btn btn-success ms-1">Confirm</button>
                <button type="button" class="btn btn-dark ms-1">Not Now</button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <li id="space1"></li>
          <li>
            <img
              src={process.env.PUBLIC_URL + "profile.jpg"}
              className="flogo"
              alt="profileimage"
              style={adminProfile}
            />
          </li>
          <li>
            <span>Viral Patel</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
