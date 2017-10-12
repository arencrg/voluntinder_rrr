import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/index'

class New extends Component {
    render() {
      return(
      <div>
        <h3>Here we will put the form to fill up the profile</h3>

          <form>
            <input type="text" placeholder="Name"/><br/><br/>
            <input type="text" placeholder="Email Address"/> <br/><br/>
            <input type="text" placeholder="Phone Number"/>

            <h2>What are your skills?</h2>
              <input type="checkbox"/> Project Management <br/>
              <input type="checkbox"/> Presentation Skills <br/>
              <input type="checkbox"/> Background in Psychology/Humanities <br/>
              <input type="checkbox"/> Background in Healthcare Management/Medicine/Nutrition <br/>
              <input type="checkbox"/> Background in Business Management/Economics <br/>
              <input type="checkbox"/> Background in Science and Technology <br/>

            <h2>What are you interested in?</h2>
              <input type="checkbox"/> Environmental Work <br/>
              <input type="checkbox"/> Community Development <br/>
              <input type="checkbox"/> Animal Rights <br/>
              <input type="checkbox"/> LGBT Rights <br/>
              <input type="checkbox"/> Women Empowerment <br/>
              <input type="checkbox"/> Education and Literacy <br/>

              <br/>
            <button onClick={() => this.props.createNewUser(user)}>Save your profile</button>
          </form>

        <Link to="/">Back</Link>
      </div>

      )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({createNewUser: createNewUser}, dispatch);
}

export default connect(matchDispatchToProps)(New);
