import React from 'react';
const CustomerCreateAccount = () => {
    return(
        <div className='auth-form-container'>
        <h2>Create Account Form</h2>
        <form className='Registration-form'>
          <input type="number" id="initialDeposit" placeholder='Enter Initial Deposit'/>
  
          <label htmlFor="accountType">Select Type Of Account:</label>
          <select id="accountType">
            <option value="savings">Savings Bank</option>
            <option value="current">Current Account</option>
          </select>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}
export default CustomerCreateAccount;