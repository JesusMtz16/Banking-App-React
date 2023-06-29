import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';

function Login(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"white", width:"100vh", padding:"30px",borderRadius:"5px" }}>
      <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
        <div style={{ textAlign: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "200px" }} />
          <p style={{ color: "black" }}>Your Personal Banking Partner</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", width: "75%", justifyContent: "center" }}>
        <div style={{ backgroundColor: "rgb(116, 149, 166)", borderRadius: "10px", padding: "20px", width: "80%" }}>
          <form>
            <h3 style={{ textAlign: "left", color: "#ffffff" }}>Log In</h3>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter User Name" style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Enter Password" style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <a href="/forgotPassword" style={{ color: "blue" }}>Forgot password</a>
              <Button type="submit" style={{color:"black", width: "100px", backgroundColor: "#ccc", borderRadius: "10px", border: "1px solid #ccc", cursor: "pointer" }}>Login</Button>
            </div>
          </form>
          <footer className="footer">
            <p style={{ color: "#ffffff" }}>© 2023 Cogent Banking App. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
