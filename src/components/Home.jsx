import React, { Component } from 'react';
import Profile from './Profile';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import Logo from './Logo';

class Home extends Component {

  // renderTodoList = () => {
  //   let {todo_lists} = this.props.userData.user
  //   return todo_lists.map((todo) => <TodoList key={todo.id} todoData={todo}/>)
  // }
  
  render() {

      console.log(this.props.userData.user)

    return (
      <div>
        <h1></h1>
        This is Home
        <Logo/>
        <Profile/>
        {/* {this.renderTodoList()} */}
        <TodoForm/>
      </div>
    );
  }
}

export default Home;