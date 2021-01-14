import React from 'react';
import {Nav} from 'react-bootstrap';


class ForumHeader extends React.Component
{

render(){
  console.log(this.props.allAnswers);
    return(
      
        <Nav className="mr-auto">
          <div className="container-fluid">

            <div className="navbar-header">
              <a className="navbar-brand" href="#"> React Forum</a>
            </div>
          </div>
        </Nav>
        );
       
  }
}
  export default ForumHeader;