import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../App.css'
import PublicCard from './PublicCard'
import { Container } from 'react-bootstrap'

class PublicFeed extends Component {
    render() {
     
        return (
           
            <div className="grid">
                {this.props.all.allArticles.map(articleObj => {
                    return <PublicCard
                            key={articleObj.id}
                            article={articleObj}/>
                })}
            </div>
           
        )
    }
}
const mstp = (reduxState) => {
    
    return {
      //these are ALL POSTS
      all: reduxState.posts
    }
  }

//   const mdtp = (reduxState) => {
//       return {
          
//           articles: reduxState.posts.allArticles
//       }
// }


export default connect(mstp,null)(PublicFeed); 
