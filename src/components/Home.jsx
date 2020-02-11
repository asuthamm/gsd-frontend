import React, { Component } from 'react';
import Profile from './Profile';
import AllTodoContainer from './AllTodoContainer';
import TodoForm from './TodoForm';
import Logo from './Logo';

class Home extends Component {
  render() {

      console.log(this.props.user.user)

    return (
      <div>
        <h1></h1>
        This is Home
        <Logo/>
        <Profile/>
        <AllTodoContainer/>
        <TodoForm/>
      </div>
    );
  }
}

export default Home;