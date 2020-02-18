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
  

  handleTodoSubmit = (newTodo) => {
    console.log(newTodo)
  }
  render() {

      // console.log(this.props)

    return (
      <div>
        {/* <TodoForm handleTodoSubmit={this.handleTodoSubmit}/> */}
        {/* <Search searchTerm={this.state.searchTerm} 
                handleInput={this.handleInput} /> */}

        <Logo/>
        {/* <Profile/> */}
        {/* {this.renderTodoList()} */}

      </div>
    );
  }
}

export default Home;