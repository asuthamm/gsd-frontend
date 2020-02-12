import React, { Component } from 'react';
import TodoList from './TodoList'

class Profile extends Component {

  renderTodoList = () => {
    let {todo_lists} = this.props.userData.user
    return todo_lists.map((todo) => <TodoList key={todo.id} todoData={todo}/>)
  }

  render() {
    const { user } = this.props.userData
    const {username, name, bio, img_url} = user
    // console.log(username, name, bio, img_url, todo_lists)
    return (
      <div>
        <h1>{username}'s Profile</h1><br/>
        <img src={img_url } alt={ name } /><br/>
        <h3>Bio:</h3>
          <p>{bio}</p>
        <h3>Upcoming Tasks: </h3><br/>
        {this.renderTodoList()}
      </div>
    )
  }
}

export default Profile;