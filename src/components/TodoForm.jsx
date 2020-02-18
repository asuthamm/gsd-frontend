import React, { Component } from 'react';

class TodoForm extends Component {

  state = {
    activityDate: "",
    activityName: "",
    activityDesc: "",
    completed: "false"


  }

  handleTodoSubmit = (e) => {
    e.preventDefault()
    this.props.handleTodoSubmit(this.state)
    // console.log(this.state)
  }

  handleChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.props)

    return (
      <div>

        <form onSubmit={this.handleTodoSubmit}>
          <h1>Name</h1>
          <h3>Adding New Todo</h3>

          <label>Activity Date</label>
          <input type="text" name="activityDate" value={this.state.activityDate} onChange={this.handleChange}/>

          <label>Activity Name</label>
          <input type="text" name="activityName" value={this.state.activityName} onChange={this.handleChange}/>
        
          <label>Activity Description</label>
          <input type="text" name="activityDesc" value={this.state.activityDesc} onChange={this.handleChange}/>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;

