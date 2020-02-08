import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

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

  render() {
    console.log(this.state)
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;

