import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form'
import LoginForm from './Components/LoginForm'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import PublicFeed from './Components/PublicFeed'
import ProfileContainer from './ProfileComponents/ProfileContainer.js'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser, getProfileFetch, persistUser, fetchAndSetUserPosts} from './Redux/actions.js'
import {fetchAndSetAllPosts, setAllPosts, addPost} from './Redux/postActions.js'


class App extends React.Component {

  componentDidMount = () => {
    this.props.persistUser()
    this.props.fetchAndSetAllPosts()
    console.log('refreshed')
  }


  renderForm = (routerProps) => {
    if (this.props.token) {
      return <h2>A token is still here {this.props.username}</h2>
    }
    if(routerProps.location.pathname === "/login"){
      return <LoginForm formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <ProfileContainer/>
  }

  renderPublicFeed = (routerProps) => {
    return <PublicFeed/>
  }

  isLoggedIn = () => {
    if(localStorage.token){
      return true
    } else {
      return false
    }
  }

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <NavBar isLoggedIn={this.isLoggedIn}/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/articles" exact render={this.renderPublicFeed } />
          <Route path="/" exact render={this.renderForm} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = (reduxState) => {
  return {
    token: reduxState.user.token,
    currentUser: reduxState.user.currentUser
  }
}


const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  fetchAndSetAllPosts: () => dispatch(fetchAndSetAllPosts()),
  fetchAndSetUserPosts: () => dispatch(fetchAndSetUserPosts()),
  persistUser: () => dispatch(persistUser())


})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
