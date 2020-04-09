import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css'
import PublicCard from './PublicCard'
import { Container } from 'react-bootstrap'

class PublicFeed extends Component {
    render() {
      console.log(this.props.all)
        return (
           
            <div className="grid">
                {this.props.all.map(articleObj => {
                    return <PublicCard
                            key={articleObj.id}
                            article={articleObj}/>
                })}
            </div>
           
        )
    }
}
const mstp = (reduxState) => {
    console.log(reduxState)
    return {
      //these are ALL POSTS
      all: reduxState.posts.allArticles
    }
  }
export default connect(mstp)(PublicFeed); 
