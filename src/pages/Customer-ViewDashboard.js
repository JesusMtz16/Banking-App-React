import React from "react";
import logo from "../assets/istockphoto-1215256045-612x612.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const CustomerViewDashboard = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <a href="/profile">Profile</a>
          <span> | </span>
          <a href="/logout">Logout</a>
          <span> | </span>
          <span>Welcome, John Doe!</span>
        </div>
      </div>

      <div>
                <Row className="Auth-form-container" >
                    <Col className='Auth-form'>
                        <nav>
                            <ul><a href="#">Create Account</a></ul>
                            <ul><a href="#">Add Beneficiary</a></ul>
                            <ul><a href="#">Remove Beneficiary</a></ul>
                            <ul><a href="#">Transfer Money</a></ul>
                            <ul><a href="#">View Statement</a></ul>
                        </nav>
                    </Col>

                    <Col style={{ backgroundColor: 'yellow' }}>
                        <Row>Account1 </Row>

                        <Row style={{ backgroundColor: 'green' }}>
                            Account2
                        </Row>
                    </Col>
                </Row>
            </div>
    </div>
  );
};

export default CustomerViewDashboard;
