import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

import "./LoginPage.css";

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

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
            <Link to="/forgot">
              <a href="/forgot"> Forgot Account?</a>
            </Link>
            <Button variant="link" onClick={handleModalOpen}>
              Sign up for Facebook?
            </Button>

            <Modal show={showModal} onHide={handleModalClose} centered >
              <Modal.Header closeButton>
                <div className="title_para">
                  <Modal.Title className="signup-title">Sign Up</Modal.Title>

                  <p>Its quick and easy.</p>
                </div>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                        className="form_inputs"
                          type="text"
                          placeholder="Enter first name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                         className="form_inputs"
                          type="text"
                          placeholder="Enter last name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="emailOrMobile">
                    <Form.Label>Email or Mobile Number</Form.Label>
                    <Form.Control
                     className="form_inputs"
                      type="text"
                      placeholder="Mobile Number Or Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     className="form_inputs"
                      type="password"
                      placeholder="New password"
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group controlId="birthdayMonth">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control as="select" >
                          <option>January</option>
                          <option>February</option>
                          <option>March</option>
                          <option>April</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>August</option>
                          <option>September</option>
                          <option>October</option>
                          <option>November</option>
                          <option>December</option>
                          {/* Add more options for other months */}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="birthdayDay">
                        <Form.Label>Birthday (Day)</Form.Label>
                        <Form.Control type="number" placeholder="Day" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="birthdayYear">
                        <Form.Label>Birthday (Year)</Form.Label>
                        <Form.Control type="number" placeholder="Year" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <div className="d-flex">
                      <div className="gender_option">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="gender"
                          id="genderMale"
                        />
                      </div>

                      <div className="gender_option">
                        <Form.Check
                          type="radio"
                          label="Female"
                          name="gender"
                          id="genderFemale"
                        />{" "}
                      </div>
                      <div className="gender_option">
                        <Form.Check
                          type="radio"
                          label="Custom"
                          name="gender"
                          id="genderCustom"
                        />
                      </div>
                    </div>
                  </Form.Group>
                </Form>

                <p className="know_More">People who use our service may have uploaded your contact information to Facebook. <a href="//">Learn more.</a> </p>
                <p className="know_More">By clicking Sign Up, you agree to our <a href="//">Terms</a> . Learn how we collect, use and share your data in our <a href="//"> Privacy Policy</a> and how we use cookies and similar technology in our <a href="//">Cookies Policy</a> . You may receive SMS Notifications from us and can opt out any time.</p>
              </Modal.Body>
              <Modal.Footer >
              
                <Button className="signUp_Btn">Sign Up</Button>
              </Modal.Footer>

            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
}
