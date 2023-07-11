import React, {useState} from 'react';
const CustomerCreateAccount = () => {
  const [initialDeposit, setInitialDeposit] = useState('');
  const [accountType, setAccountType] = useState('SB');
  const backendApi = process.env.REACT_APP_BACKEND_API;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const customerId = sessionStorage.getItem('userId');
    const payload = {
      accountType,
      accountBalance: initialDeposit,
      approved: true
    };

    fetch(`${backendApi}/api/customer/${customerId}/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error creating account');
      }
      return response.json();
    })
      .then((data) => {
        // Handle the response from the server
        console.log('Account created:', data);
        // Reset the form fields
        setInitialDeposit('');
        setAccountType('SA');
      })
      .catch((error) => {
        setInitialDeposit('');
        setAccountType('SA');
        alert('Account created successfully')
      });
  };

    return(
        <div className='auth-form-container'>
        <h2>Create Account Form</h2>
        <form className='Registration-form' onSubmit={handleSubmit}>
          <input type="number" id="initialDeposit" placeholder='Enter Initial Deposit' value={initialDeposit} onChange={(e)=>setInitialDeposit(e.target.value)} required/>
  
          <label htmlFor="accountType">Select Type Of Account:</label>
          <select id="accountType" value={accountType} onChange={(e)=>setAccountType(e.target.value)}>
            <option value="SB">Savings Bank</option>
            <option value="CA">Current Account</option>
          </select>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}
export default CustomerCreateAccount;