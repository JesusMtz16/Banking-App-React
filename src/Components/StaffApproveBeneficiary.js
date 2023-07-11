import React from 'react';

const StaffApproveBeneficiary = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colspan="4" align="center">Newly Added Beneficiary</th>
                </tr>
                <tr>
                    <th scope="col">From Customer Name-CustomerId</th>
                    <th scope="col">Beneficiary Name-AcNo</th>
                    <th scope="col">Beneficiary Added Date</th>
                    <th scope="col">Approve</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sita-12345</td>
                    <td>Rama-44332</td>
                    <td>t-1-2022</td>
                    <td>Approve</td>
                </tr>
                <tr>
                    <td>Jane-22112</td>
                    <td>John-6775</td>
                    <td>12-01-2022</td>
                    <td>Approve</td>
                </tr>
                <tr>
                    <td>Becky-78786</td>
                    <td>Jane-22112</td>
                    <td>12-01-2022</td>
                    <td>Approve</td>
                </tr>
            </tbody>
        </table>
    )
}
export default StaffApproveBeneficiary;