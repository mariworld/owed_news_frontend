import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../Redux/actions';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userPostFetch(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Form);