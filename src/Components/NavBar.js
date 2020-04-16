import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {logOut} from '../Redux/actions'
// import {Nav, Navbar} from 'react-bootstrap'
import "tabler-react/dist/Tabler.css";
import { Card, Button} from "tabler-react";

const NavBar = (props) => {
console.log(props)
  const handleClick = () => {
      console.log("you are now logging out",localStorage);
      props.logOut()
      localStorage.clear()
  }
  console.log(props)

  //hook that gives access to the redux store
  const user = useSelector(state => state.user)
  console.log(user)

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
   

         {/* <div> 
            <ul>
              <Button><NavLink to="/articles">Article Store</NavLink></Button>
            </ul>
            <ul>
              <Button><NavLink to="/profile">Profile</NavLink></Button>
            </ul>
            <ul>
              <Button onClick={handleClick}>Log out</Button>
            </ul>
          </div>
       
         
            <center>
            <ul>
             <Button><NavLink to="/login">Login</NavLink></Button>
            </ul>
             <ul>
              <Button><NavLink to="/register">Register</NavLink></Button>
            </ul>
          </center> */}

       
      
    </div>
 

  )
};

export default connect(null, {logOut})(NavBar);