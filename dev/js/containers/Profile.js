import React, { Component } from 'react';
import { Link } from 'react-router';

class Profile extends Component {
    render() {
      return(
      <div>
        <h3>Here is the saved profile</h3>
        <Link to="/">Back</Link>
      </div>

      )
    }
}

export default Profile;
