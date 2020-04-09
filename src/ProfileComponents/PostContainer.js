import React from 'react';
import {connect} from 'react-redux'
import Post from './Post'

const PostContainer = (props) => {
  return (
    <div>
      <h2>Here are all the posts available in our store!</h2>
      <ul>
        {
          // props.posts.map((postObj) => {
          //   return <Post key={postObj.id} post={postObj}/>
          // })
        }
      </ul>
    </div>
  )
};

const mstp = (reduxState) => {
  return {
    posts: reduxState.posts.all
  }
}


export default connect(mstp, {})(PostContainer);