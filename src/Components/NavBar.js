import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../Redux/actions'
import {Nav, Navbar} from 'react-bootstrap'
import "tabler-react/dist/Tabler.css";
import { Card, Button} from "tabler-react";

const NavBar = (props) => {

  const handleClick = () => {
      console.log("you are now logging out",localStorage);
      props.logOut()
      localStorage.clear()
  }

  return(
    <div>
  
      <center>OWED NEWS</center>
        <center>
            <ul>
              <Button><NavLink to="/articles">Article Store</NavLink></Button>
            </ul>
            <ul>
              <Button><NavLink to="/profile">Profile</NavLink></Button>
            </ul>
            <ul>
              <Button onClick={handleClick}>Log out</Button>
            </ul>
          </center>
       
         
            <center>
            <ul>
             <Button><NavLink to="/login">Login</NavLink></Button>
            </ul>
             <ul>
              <Button><NavLink to="/register">Register</NavLink></Button>
            </ul>
          </center>
      
        </div>
 

  )
};

export default connect(null, {logOut})(NavBar);