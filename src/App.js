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

// Whatever you import from your actionCreator file will be the second argument in connect's first set of ()
import {loginUser, getProfileFetch, persistUser} from './Redux/actions.js'
import {fetchAndSetAllPosts, setAllPosts, addPost} from './Redux/postActions.js'


class App extends React.Component {


  componentDidMount = () => {
    this.props.persistUser()
    // this.props.getProfileFetch()
    this.props.fetchAndSetAllPosts()
  }





  // handleLoginSubmit = (userInfo) => {
  //   console.log("Login form has been submitted")
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(userInfo)
  //   })
  //   .then(r => r.json())
  //   .then((resp) => {
  //     localStorage.token = resp.token
  //     this.props.setUserInformation(resp)
  //     this.props.history.push("/profile")
  //   })


  // }

  // handleRegisterSubmit = (userInfo) => {
  //   console.log("Register form has been submitted")
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       username: userInfo.username,
  //       password: userInfo.password
  //     })
  //   })
  //   .then(r => r.json())
  //   .then((resp) => {
  //     console.log(resp)
  //     localStorage.token = resp.token
  //     this.props.setUserInformation(resp)
  //     this.props.history.push("/profile")
  //     // window.location.reload()
  //   })

  // }

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

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={this.renderPublicFeed } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = (reduxState) => {
  return {
    token: reduxState.user.token,
    // username: reduxState.user.username
    currentUser: reduxState.user.currentUser
  }
}

// let mapDispatchToProps = {
//   // setUserInformation,
//   loginUser,
//   setAllPosts,
//   fetchAndSetAllPosts,
//   getProfileFetch
// }
const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  fetchAndSetAllPosts: () => dispatch(fetchAndSetAllPosts()),
  persistUser: () => dispatch(persistUser())

})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
)
