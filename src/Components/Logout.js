import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class Logout extends Component{
    handleLogout(){
        // Implement your logout logic here
        // For example, clearing user session, redirecting, etc.
        console.log('User logged out');
    }

    render(){
        return (
            <div>
                <Button onClick={()=>this.handleLogout()}>
                    Logout
                </Button>
            </div>
        );
    }
}

export default Logout;