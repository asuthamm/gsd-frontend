import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Route, Switch} from 'react-router';
import {Link, NavLink} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';





class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(usersData => 
        this.setState({
          users: usersData
      }))
  }

  handleRegisterSubmit = (infoSentUp) => {
    console.log(infoSentUp)
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(infoSentUp)
    })
    .then(resp => resp.json())
    .then(newUserData => {
      console.log(newUserData) 
    })
  }

  handleLoginSubmit = (infoSentUp) => {
    console.log(infoSentUp)
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <LoginForm formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <RegisterForm formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;

