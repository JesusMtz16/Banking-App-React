import React from "react";

const StaffByAccountNumber = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colspan="4" align="center">Account Details</th>
        </tr>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Reference</th>
          <th scope="col">Amount</th>
          <th scope="col">Cr/Db</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-1-2022</td>
          <td>123-testing</td>
          <td>500</td>
          <td>Cr</td>
        </tr>
        <tr>
          <td>2-1-2022</td>
          <td>222-trnsfr-comp</td>
          <td>2000</td>
          <td>Db</td>
        </tr>
        <tr>
          <td>2-1-2022</td>
          <td>459-credit card</td>
          <td>1578</td>
          <td>Db</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StaffByAccountNumber;
