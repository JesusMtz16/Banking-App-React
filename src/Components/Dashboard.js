import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const Dashboard = () => {
    const [accounts, setAccounts] = useState([]);
    const backendApi = process.env.REACT_APP_BACKEND_API;

    useEffect(() => {
        const userId = sessionStorage.getItem("userId");
        

        fetch(`${backendApi}/api/customer/getAccounts/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setAccounts(data); // Update the accounts state with the retrieved data
        })
        .catch((error) => {
          console.error("Error retrieving accounts:", error);
        });

    }, []);
    const handleChange = (accountId) => {
      
        const updatedAccounts = accounts.map((account) => {
            if (account.id === accountId) {
              // Toggle the account's "approved" field
              return { ...account, approved: !account.approved };
            }
            return account;
          });
      
          // Update the accounts state with the locally updated account
          setAccounts(updatedAccounts);
      
        // Send a PUT or PATCH request to update the account on the server side
        fetch(`${backendApi}/api/customer/enable/disable/${accountId}`, {
          method: 'PUT', // or 'PATCH' depending on your backend API
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedAccounts.find((account) => account.id === accountId)),
        })
          .then((response) => response.json())
          .then((updatedAccount) => {
            // Update the accounts state with the updated account
            setAccounts((prevAccounts) =>
              prevAccounts.map((account) =>
                account.id === updatedAccount.id ? updatedAccount : account
              )
            );
          })
          .catch((error) => {
            console.error(`Error updating account with id ${accountId}:`, error);
          });
      };

return(
    <div>
        {accounts.map((account) => (
          <div className="account-container" key={account.id}>
            <div className="account-details">
          <p>Account Type: {account.accountType} </p>
          <p>Account Balance: {account.accountBalance} </p>
          </div>
            <div className="account-actions">
            <div className="enable-disable-label">
              <label htmlFor={`flexSwitchCheck${account.id}`}>Enable / Disable</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id={`flexSwitchCheckC${account.id}`} checked={account.approved} onChange={() => handleChange(account.id)} />
            </div>
            <Button size="sm">View More</Button>
            </div>
          </div>
        ))}
    </div>
)
}
export default Dashboard;