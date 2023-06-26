import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// export default function (props) {
function Login(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">LogIn</h3>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter User Name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div>
            <a href="#">Forgot password</a><Button type="submit"> Login </Button>
          </div>
          <div className="forgot-password text-right mt-2">
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;