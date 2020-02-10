import React, { Component } from 'react';
import Profile from './Profile';
import AllTodoContainer from './AllTodoContainer';
import TodoForm from './TodoForm';
import Logo from './Logo';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <Profile/>
        <AllTodoContainer/>
        <TodoForm/>
      </div>
    );
  }
}

export default Home;