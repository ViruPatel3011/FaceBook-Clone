import React, { useState } from "react";
import "./NavbarAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Facebook } from "react-bootstrap-icons";
import { Search } from "react-bootstrap-icons";
import { BoxArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import UserList from "../UserList";
import UserForm from "../UserForm";

export default function NavbarAdmin() {
  const btnStyle = {
    fontWeight: "bold",
    fontSize: "15px",
    margin: "0 10px",
  };

  const adminProfile = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  };

  const [activeTab, setActiveTab] = useState("userList");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav>
        <ul>
          <li id="fb">
            <Facebook />{" "}
          </li>

          <div className="search-bar ms-3">
            <div className="search-icon">
              <Search />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Facebook"
              className="search-input"
            />
          </div>

          <li id="space2"></li>
          <button
            type="button"
            className={`btn ${
              activeTab === "userList" ? "btn-info" : "btn-light"
            } UserBtn`}
            style={btnStyle}
            onClick={() => handleTabChange("userList")}
          >
            User List
          </button>

          <button
            type="button"
            className={`btn ${
              activeTab === "userForm" ? "btn-info" : "btn-light"
            } UserBtn`}
            style={btnStyle}
            onClick={() => handleTabChange("userForm")}
          >
            User Form
          </button>

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
            <Link to="/">
              <button
                type="button"
                className="btn btn-info"
                style={{ padding: 0,width: 30 }}
              >
                <BoxArrowRight className="bi-arrow-right-short" />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        {activeTab === "userList" && (
          <>
            <UserList userName="Viral Patel" />
            <UserList userName="John Doe" />
            <UserList userName="Jay  Shah" />
          </>
        )}
        {activeTab === "userForm" && <UserForm />}
      </div>
    </div>
  );
}
