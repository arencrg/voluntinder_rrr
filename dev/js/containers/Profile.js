import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
      console.log("This is your user profile, your info should be displayed here.")
      console.log(this.props.user);
      return(
      <div>
        <h3>"{this.props.user.name}'s profile"</h3>
        {this.props.user.name}
        {this.props.user.age}
        <Link to="/">Back</Link>
      </div>

      )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user[0]
    };
}

export default connect(mapStateToProps)(Profile);
