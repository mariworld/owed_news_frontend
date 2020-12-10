import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {logOut} from '../Redux/actions'
// import {Nav, Navbar} from 'react-bootstrap'
import "tabler-react/dist/Tabler.css";
import { Card, Button} from "tabler-react";

const NavBar = (props) => {
  const handleClick = () => {
      props.logOut()
      localStorage.clear()
  }
 const user = useSelector(state => state.user)

  return(
  
    <div className='navbar-cont'>
       {(user.currentUser.id) ? (

        <div className='navbar'>
        

          <Button><NavLink to="/profile">Profile</NavLink></Button>

          <Button><NavLink to="/articles">Article Store</NavLink></Button>

          <Button onClick={handleClick}>Log out</Button>

        </div>
      ) : (
        <div className='navbar'>
         
          <Button><NavLink to="/login">Login</NavLink></Button>

          <Button><NavLink to="/articles">Article Store</NavLink></Button>
        
          <Button><NavLink to="/register">Register</NavLink></Button>
        </div>
      )}
      
      <div align='center' className='header'>Owed News</div>
  
  )
};

export default connect(null, {logOut})(NavBar);
