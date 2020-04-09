import React, { Component } from 'react';
import Post from './Post'
import {connect} from 'react-redux'
import '../App.css'

class ProfileContainer extends Component {

  render() {
    
    return (
      <div>
        {localStorage.token 
        ? 
        <h2>{this.props.user.username}&apos;s Profile</h2>
        :
        <h2>Create an Account</h2>
        
      }
        <h3>posts</h3>

        <ol>
          {/* <div className="card-container">
           <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:"100%"}}/>
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect + Engineer</p>
           </div>
           </div>
        </div>       */}
        </ol>
      </div>
    );
  }

}

const getInfoPlease = (reduxState) => {
  return {
    user: reduxState.user,
    posts: reduxState.posts,
    token: localStorage.token
  }
}




export default connect(getInfoPlease, {})(ProfileContainer);
//connect takes two arguments, 1.) the state's store and mapDispatchToProps