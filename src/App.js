import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Route, Switch} from 'react-router';
import {withRouter, Link, NavLink} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';




class App extends Component {

  state = {
    users: [],
    token: ""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: data.user,
            token: data.token
          }, () => {
            console.log(this.props)
            this.history.push("/home")
          })
          
        }
      })


    }
    // fetch("http://localhost:3000/users")
    //   .then(res => res.json())
    //   .then(usersData => 
    //     this.setState({
    //       users: usersData
    //   }))
  }

  handleRegisterSubmit = (infoSentUp) => {
    // console.log(infoSentUp)
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(infoSentUp)
    })
    .then(resp => resp.json())
    .then(newUserData => {
      if (!newUserData.error) {
        localStorage.setItem("token", newUserData.token)
        this.setState({
          user: newUserData.user,
          token: newUserData.token
        }, () => {
          // debugger
          this.props.history.push("/profile")
        })
      }
    })
  }

  handleLoginSubmit = (infoSentUp) => {
    console.log(infoSentUp)
        this.setState({
          user: infoSentUp.user,
          token: infoSentUp.token
        })  
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <LoginForm formName="Login Form" routerProps={routerProps} handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <RegisterForm formName="Register Form" routerProps={routerProps} handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  render() {
    // console.log(this.state)
    return (
      <div>
        <Switch>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
          <Route path="/home" render={() => {
            return <Profile />
          }}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

