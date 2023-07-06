import React from 'react';
const CustomerAddBeneficiary = () => {
return(
    <div className='auth-form-container'>
    <h2>Add Beneficiary</h2>
    <form className='Registration-form'>
      <input type="number" id="AccountNumber" placeholder='Enter Account Number'/>
      <input type="number" id="ConfirmAccountNumber" placeholder='Confirm Account Number'/>
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
export default CustomerAddBeneficiary;