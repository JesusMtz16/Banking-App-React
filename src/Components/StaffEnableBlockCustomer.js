import React from 'react';

const StaffEnableBlockCustomer = () => {
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Enable Disable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rama</td>
                        <td>12345</td>
                        <td>enable, disable</td>
                    </tr>
                    <tr>
                        <td>Sita</td>
                        <td>65487</td>
                        <td>enable, disable</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default StaffEnableBlockCustomer;