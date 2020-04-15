import React from 'react'
import {addPostToUser} from '../Redux/actions'
import {addPost} from '../Redux/postActions'
import {connect} from 'react-redux'

const CardBookmark = (props) => {

    const handleClick = () => {
        console.log('hi')
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
                <button onClick={handleClick}>Delete From Collection</button>
        </div>
        </React.Fragment>
      
    )
}

let mdtp = {
    addPostToUser,
    addPost
}

const mstp = (reduxState) => {
    return {
      //these are ALL POSTS
      all: reduxState.posts
    }
  }

export default connect(mstp,mdtp)(CardBookmark)
