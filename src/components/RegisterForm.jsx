import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    name: "",
    password: "",
    bio: "",
    img_url: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, username, password, bio, img_url} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <label htmlFor="username">Name:</label>
        <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/><br/>
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/><br/>
        <label htmlFor="username">Bio:</label>
        <textarea type="text" autoComplete="off" name="bio" value={bio} onChange={this.handleChange}/><br/>
        <label htmlFor="username">Profile Url:</label>
        <input type="text" autoComplete="off" name="img_url" value={img_url} onChange={this.handleChange}/><br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default Form;