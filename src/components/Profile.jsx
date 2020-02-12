import React, { Component } from 'react';

class Profile extends Component {

  render() {
    const { user } = this.props
    const { user:innerUser, token } = user
    const {username, name, bio, img_url, todo_lists} = innerUser
    // console.log(username, name, bio, img_url)
    console.log(todo_lists)
    // const {}
    return (
      <div>
        hi {this.props.user.user.username} from Profile!!!

        {todo_lists.map((todo,index) => (
          <div key={index}>
            <h3>Date: {todo.todo_date}</h3>
            <p>Items:</p> 
   
              {todo.items.map((item,index) => (
                <ul>
                  <li key={item.name-index}>{item.name}</li>
                  <li key={item.description-index}>{item.description}</li>
                  <li key={item.completed-index}>{item.completed ? 'yes' : 'no'}</li>
                </ul>
                )) }
      
          </div>
        ))}
      </div>
    )
  }
}

export default Profile;