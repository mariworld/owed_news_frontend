import React from 'react'
import {addPostToUser} from '../Redux/actions'
import {addPost} from '../Redux/postActions'
import {connect} from 'react-redux'
import "tabler-react/dist/Tabler.css";
import { Card, Button } from "tabler-react";


const PublicCard = (props) => {
 
 
    const handleClick = () => {
        if(props.all.allArticles.find((article) => article.title)){
            props.addPostToUser(props.article)
            // props.history.push("/profile")
        } else {
            props.addPost(props.article)
            
        }

    }
    console.log(props)

    let {title, url, urlToImage } = props.article
    return (
        <Card>
        <div>
            <div>
            
            <div className="card"> 
                <img src={urlToImage} alt="Avatar" style={{maxWidth:"100%", maxHeight:"100%"}}/>
                <div className="container">
                <a href={url}>  <h4><b>{title}</b></h4>  </a>
                    <p></p>
                   
                </div>
            </div>
           
        </div>
                <Button onClick={handleClick}>Add to Your News Bank</Button>
        </div>
        </Card>
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

export default connect(mstp,mdtp)(PublicCard)
