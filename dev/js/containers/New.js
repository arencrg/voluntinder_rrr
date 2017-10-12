import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/index'

class New extends Component {

    render() {

      let chooseSkills = [  {id: 1, name: 'Project Management'},
                            {id: 2, name: 'Presentation Skills'},
                            {id: 3, name: 'Background in Psychology/Humanities'},
                            {id: 4, name: 'Background in Healthcare Management/Medicine/Nutrition'},
                            {id: 5, name: 'Background in Business Management/Economics'},
                            {id: 6, name: 'Background in Science and Technology'} ]

      let chooseInterests = [ {id: 1, name: 'Environmental Work'},
                              {id: 2, name: 'Community Development'},
                              {id: 3, name: 'Animal Rights'},
                              {id: 4, name: 'LGBT Rights'},
                              {id: 5, name: 'Women Empowerment'},
                              {id: 6, name: 'Education and Literacy'} ]


      return(
      <div>
        <h3>Here we will put the form to fill up the profile</h3>

          <form>
            <input type="text" placeholder="Name"/><br/><br/>
            <input type="text" placeholder="Email Address"/> <br/><br/>
            <input type="text" placeholder="Phone Number"/>
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
