import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {Route, Switch} from 'react-router';
import {withRouter, Link} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';

class App extends Component {

  state = {
    // users: [],
    user: {
      id: 0,
      name: "",
      username: "",
      bio: "",
      img_url: "",
      todo_lists: []
    },
    token: ""
  }

  componentDidMount() {
    // console.log('cdm...', this.state)
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
          }
          , () => {
            this.props.history.push("/login")
          }
          )
        }
      })


    }
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
    // console.log(infoSentUp)
    if (!infoSentUp.error) {
      // console.log('no error...')
      localStorage.setItem("token", infoSentUp.token)
        this.setState({
          user: infoSentUp.user,
          token: infoSentUp.token
        })  
        this.props.history.push("/profile")
    } 
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <LoginForm formName="Login Form" routerProps={routerProps} handleSubmit={this.handleLoginSubmit}/>

    } else if (routerProps.location.pathname === "/register") {
      return <RegisterForm formName="Register Form" routerProps={routerProps} handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = (routerProps) => {
    return <Profile userData={this.state}/>
  }

  renderHome = (routerProps) => {
    return <Home userData={this.state}/>
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Switch>
          <Route path="/profile" render={this.renderProfile}/>
          <Route path="/home" render={this.renderHome}/>
          {/* <Route exact path="/" render={this.renderForm}/> */}
          <Route path="/login" render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

