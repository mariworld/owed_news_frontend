import React from 'react'
import {addPostToUser, deletePostFromUser} from '../Redux/actions'
import {addPost} from '../Redux/postActions'
import {connect} from 'react-redux'
import history from '../history';

const CardBookmark = (props) => {

    let handleDeletePost = (e) => {
        console.log(props)
        // console.log(props.energy)
        props.deletePostFromUser(props.article.id)
        history.push("/profile")
    }
    console.log(props)
    let {title, url, url_image, content_body} = props.article
    return (
      
            <React.Fragment>
        <div>
            <div>
          
            <div className="card"> 
                <img src={url_image} alt="Avatar" style={{maxWidth:"100%", maxHeight:"100%"}}/>
                <div className="container">
                <a href={url}>   <h4><b>{title}</b></h4>  </a>
                    <p></p>
                   
                </div>
            </div>
           
        </div>
                <button onClick={handleDeletePost}>Delete From Collection</button>
        </div>
        </React.Fragment>
      
    )
}

let mdtp = {
    addPostToUser,
    addPost,
    deletePostFromUser
}

const mstp = (reduxState) => {
    return {
      //these are ALL POSTS
      all: reduxState.posts
    }
  }

export default connect(mstp,mdtp)(CardBookmark)
