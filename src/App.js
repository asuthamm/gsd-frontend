import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Route, Switch} from 'react-router';
import {Link, NavLink} from 'react-router-dom'
import RegisterLoginContainer from './components/RegisterLoginContainer'
import Form from './components/Form';



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

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route path="/home" render={this.renderHome}/>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;

