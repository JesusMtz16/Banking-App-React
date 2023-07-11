import React,{useState} from "react";
import logo from '../assets/istockphoto-1215256045-612x612.jpg';

const Profile = () => {
        const [fullName, setFullName] = useState('');
        const [phone, setPhone] = useState('');
        const [pan, setPan] = useState('');
        const [aadhar, setAadhar] = useState('');
        const [securityQuestion, setSecurityQuestion] = useState('');
        const [answer, setAnswer] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Perform form submission logic here
        };
    return (
        <div>
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="header-text">
            <a href="/profile">Profile</a>
            <span> | </span>
            <a href="/">Logout</a>
            <span> | </span>
            <span>Welcome UserName</span>
          </div>
        </div>
        <div className="auth-form-container">
        <form className="Registration-form" onSubmit={handleSubmit}>
        <label>Customer ID:<input type="text"></input></label>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>

      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <label>
        PAN:
        <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} />
      </label>

      <label>
        AADHAR:
        <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
      </label>

      <label>
        Upload PAN:
        <input type="file" />
      </label>

      <label>
        Upload AADHAR:
        <input type="file" />
      </label>

      <label>
        Select Security Question:
        <select value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)}>
          <option value="">Select a question</option>
          <option value="question1">Question 1</option>
          <option value="question2">Question 2</option>
          <option value="question3">Question 3</option>
        </select>
      </label>

      <label>
        Answer:
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </label>

      <button type="submit">Update</button>
    </form>
    </div>
        <footer className="footer">
            <p className="footer-text">© 2023 Cogent Banking App. All rights reserved.</p>
          </footer>
        </div>
    )
    }
export default Profile;