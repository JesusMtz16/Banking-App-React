import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/istockphoto-1215256045-612x612.jpg'; // Tell webpack this JS file uses this image
import './Login.css'; // Import the CSS file for the component

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async (event) => {
    event.preventDefault();
    const backendApi = process.env.REACT_APP_BACKEND_API;

    fetch(`${backendApi}/api/customer/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          "username":username, 
          "password":password
        }
      ),
    })
    .then(response => console.log(response))
    .catch(error => {
      console.log('Error:', error);
      if (error.response) {
        console.log('Response:', error.response);
      }
    }
    );

  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  return (
    <div className="login-container">
      <div className="logo-container">
        <div className="logo-content">
          <img src={logo} alt="Logo" className="logo-img" />
          <p className="logo-text">Your Personal Banking Partner</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-content">
          <form onSubmit={loginHandler}>
            <h3 className="form-heading">Log In</h3>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter User Name" value={username} onChange={handleUsernameChange}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={handlePasswordChange}/>
            </div>
            
            <div className='forgot-password-container'>
              <a href="/forgotPassword" className="forgot-password">Forgot password</a>
            </div>

            <div className="form-footer">
              <Button type="submit" className="login-button">Login</Button>
            </div>
          </form>
          <footer className="footer">
            <p className="footer-text">© 2023 Cogent Banking App. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
