import React, { Component } from 'react';
import Profile from './components/Profile';
import AllTodoContainer from './components/AllTodoContainer';
import TodoForm from './components/TodoForm';
import Logo from './components/Logo';

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