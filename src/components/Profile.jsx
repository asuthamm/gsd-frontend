import React, { Component } from 'react';

class Profile extends Component {

  render() {
    const { user } = this.props
    const { user:innerUser, token } = user
    const {username, name, bio, img_url} = innerUser
    console.log(username, name, bio, img_url)
    // const {}
    return (
      <div>
        hi {this.props.user.user.username} from Profile!!!
      </div>
    );
  }
}

export default Profile;