import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../App.css'
import CardBookmark from './CardBookmark';

class ProfileContainer extends Component {
  
   renderCardBookmarks = () => {
   return this.props.user.user_posts.map(userPostObj => {
      return <CardBookmark
              key={userPostObj.id}
              article={userPostObj}/>
    })
  }
  render() {
      
    return (
      <div>
        {this.props.user 
        ? 
        <h2>{this.props.user.username}&apos;s Profile</h2>
        :
        <h2>Create an Account</h2>
        
      }
        <h3>Saved Articles</h3>

        <div className="grid">
                {this.renderCardBookmarks()}
            </div>
      </div>
    );
  }

}

const getInfoPlease = (reduxState) => {
  return {
    user: reduxState.user.currentUser,
    posts: reduxState.posts,
    token: localStorage.token
  }
}


export default connect(getInfoPlease, {})(ProfileContainer);
