import React, { Component } from 'react';
import {withRouter, Link, NavLink} from 'react-router-dom'


class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log("Login form has been submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        // infoSentUp
        this.state
      )
    })
    .then(r => r.json())
    .then(userData => {
      this.props.handleSubmit(userData)
    })
    this.props.history.push("/home")
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
    // console.log(this.props)
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

export default withRouter(LoginForm);