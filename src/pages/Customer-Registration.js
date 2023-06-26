import React, { useState } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
export const CustomerRegistration = () => {
  const handleLoginClick = () => { };
  const [isUserNameAvailable, setIsUserNameAvailable] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] = useState(false);
  const checkUserNameAvailability = (event) => {
    const enteredUserName = event.target.value;
    const checkUserNameUniqueness = (enteredUserName) => {
      // Perform an API call or any other validation check to determine if the user name is unique 
      // and return a promise that resolves to true or false

    };
    checkUserNameUniqueness(enteredUserName)
      .then((isUnique) => {
        setIsUserNameAvailable(isUnique);
      })
      .catch((error) => {
        setIsUserNameAvailable(false);
        console.error(error);
      });
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsConfirmPasswordTouched(true);
  };
  const passwordsMatch = password === confirmPassword;
  const passwordError = isConfirmPasswordTouched && !passwordsMatch ? 'Passwords do not match' : '';

  const handleRegister = () => {
    const customerData = {
      username: document.getElementById('userName').value,
      fullName: document.getElementById('fullName').value,
      password: password,
    };

    // Send the customer data to the server using an HTTP request
    fetch('your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('New customer created:', data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error creating new customer:', error);
      });
  };

  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <h1>Registration</h1>
        </div>
      </div>

      <div className='auth-form-container'>

        <form className='Registration-form'>
          <input type="text" placeholder="User Name" id="userName" required onChange={checkUserNameAvailability} />
          {!isUserNameAvailable && (
            <p style={{ color: 'red' }}>The user name is already taken. Please choose a different one.</p>
          )}
          <input type="text" placeholder="Full Name" id="fullName" required />
          <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} required />
          <input type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          <button on onClick={handleRegister}>Register</button>
        </form>
        <p>
          Already have a customer account?{' '}
          <a href="#" onClick={handleLoginClick}>
            Log In Here
          </a>
        </p>
      </div>
      <footer className="footer">
        <p>© 2023 Cogent Banking App. All rights reserved.</p>
      </footer>
    </div>
  )
};