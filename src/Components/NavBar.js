import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../Redux/actions'
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = (props) => {

  const handleClick = () => {
      console.log("you are now logging out",localStorage);
      props.logOut()
      localStorage.clear()
  }

  return(
 <div>
    <ul >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <button onClick={handleClick}>Log out</button>
      </li>
    </ul>
   
    </div>
  )
};

export default connect(null, {logOut})(NavBar);