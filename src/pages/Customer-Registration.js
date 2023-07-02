import React, { useState } from 'react';
import logo from '../assets/istockphoto-1215256045-612x612.jpg';
export const CustomerRegistration = () => {

  
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUserNameAvailable, setIsUserNameAvailable] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const clearForm = () => {
    setUserName('');
    setFullName('');
    setPassword('');
    setConfirmPassword('');
    setIsUserNameAvailable(true);
    setPasswordError('');
  };

  const checkUserNameUniqueness = async () => {
    // Perform an API call or any other validation check to determine if the user name is unique 
    // and return a promise that resolves to true or false
    if (userName === '') {
      return true;
    }
    try {  
      const apiUrl = process.env.REACT_APP_BACKEND_API;
      const isUnique = await fetch(`${apiUrl}/api/customer/isUnique/${userName}`)
        .then((response) => response.json());
      return isUnique;
    }
    catch (error) {
      console.error(error);
      return false;
    }
  };

  const checkUserNameAvailability = (event) => {
    checkUserNameUniqueness(userName)
      .then((isUnique) => {
        setIsUserNameAvailable(isUnique);
      })
      .catch((error) => {
        setIsUserNameAvailable(false);
        console.error(error);
      });
  };
  const handlePasswordChange = (event) => {
    console.log('Password changed:', event.target.value);
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    console.log('Username changed:', event.target.value);
    setUserName(event.target.value);
  };
  const handleFullname = (event) => {
    console.log('Fullname changed:', event.target.value);
    setFullName(event.target.value);
  };
  
  const handleConfirmPasswordChange = (event) => {
    console.log('Confirmed password changed:', event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if ((password !== confirmPassword) || !isUserNameAvailable || (userName === '') || (fullName === '') || (password === '')) {
      
      return;
    }

    const apiUrl = process.env.REACT_APP_BACKEND_API;

    const customerData = {
      'username': userName,
      'fullName': fullName,
      'password': password,
    };

    console.log('New customer data:', customerData);
    // Send the customer data to the server using an HTTP request
    fetch(`${apiUrl}/api/customer/register`, {
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
    clearForm();
  };

  return (
    <div>
      {/* 
      
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="header-text">
          <h1>Registration</h1>
        </div>
      </div>
      
      */}

      <div className='auth-form-container'>

        <form className='Registration-form' onSubmit={handleRegister}>
          <input type="text" placeholder="User Name" id="userName" value={userName} required onChange={handleUsernameChange} onBlur={checkUserNameAvailability} />
          {!isUserNameAvailable && (
            <p style={{ color: 'red' }}>The user name is already taken. Please choose a different one.</p>
          )}
          <input type="text" placeholder="Full Name" id="fullName" value={fullName} onChange={handleFullname} required />
          <input type="password" placeholder="Password" id="password" value={password} onChange={handlePasswordChange} required />
          <input type="password" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}  onBlur={handlePasswordBlur}required />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
          <button style={{ marginTop: '20px' }} type='submit' >Register</button>
        </form>
        <p>
          Already have a customer account?{' '}
          <a href="/login">
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