import React from 'react'

export default function UserList(props) {

 
  const userProfile = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  };
  const userName = {
    margin: "31px 14px",
    fontSize: "16px",
  };



  return (
    <div className="d-flex userSection">
    <div className=" d-flex userData " >
      <img
        src={process.env.PUBLIC_URL + "profile.jpg"}
        className="flogo"
        alt="profileimage"
        style={userProfile}
       
      />
      <h4 style={userName}>{props.userName}</h4>
    </div>
    <div className="d-flex">
      <button type="button" className="btn btn-success ms-1 ">Confirm</button>
      <button type="button" className="btn btn-dark ms-1">Not Now</button>
    </div>
  </div>
  );
}
