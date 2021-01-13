import React from 'react';
import{Nav, Button,NavDropdown,Form, FormControl}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


class ForumHeader extends React.Component
{

render(){
  console.log(this.props.allAnswers);
    return(
      
        <Nav className="mr-auto">
          <div className="container">

            <div className="nav-title">
              <a className="nav regular" href="#"> React Forum</a>
            </div>
          </div>
        </Nav>
        );
       
  }
}
  export default ForumHeader;