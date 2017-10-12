import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {

      console.log("This is your user profile, your info should be displayed here.")
      console.log(this.props.user);

      var mySkills = this.props.user.skills.filter(function (skill) {
        if (skill.val == true) {return (skill)} });
      var myInterests = this.props.user.interests.filter(function (interest) {
        if (interest.val == true) {return (interest)} });


      return(
      <div>
        <h3>{this.props.user.name} <br/>
            {this.props.user.age}, {this.props.user.location}</h3>
          <p>{this.props.user.about}</p>
          <h4>Email:</h4>
              <p>{this.props.user.email}</p>
          <h4>Contact No:</h4>
              <p>{this.props.user.contactno}</p>
          <br/>
          <h4>My Skills</h4>
                {mySkills.map((skill, i) => <li key={i}>{skill.name}</li>)}
          <h4>Interests</h4>
                {myInterests.map((interest, i) => <li key={i}>{interest.name}</li>)}
          <br/>

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
