import React, { useState } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(`An email with password reset instructions has been sent to ${email}`);
    setEmail('');
  };

  return (
    <div>
      {/* header */}
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <h1>Login</h1>
        </div>
      </div>  

      <h2>Forgot Password</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
