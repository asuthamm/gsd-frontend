import React, { Component } from 'react';
import Profile from './Profile';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import Logo from './Logo';

class Home extends Component {

  renderTodoList = () => {
    let {allTodo} = this.props
    return allTodo.map((todo) => <TodoList key={todo.id} todoData={todo}/>)
  }
  
  render() {

      console.log(this.props)

    return (
      <div>
        {/* <Logo/> */}
        {/* <Profile/> */}
        {this.renderTodoList()}
        {/* <TodoForm/> */}
      </div>
    );
  }
}

export default Home;