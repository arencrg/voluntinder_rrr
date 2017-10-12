import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/index'

class CheckboxGroup extends Component {

  checkboxGroup() {
      let {label, required, options, input, meta} = this.props;

      return options.map((option, index) => {
          return (
          <div className="checkbox" key={index}>
              <label>
                  <input type="checkbox"
                         name={`${input.name}[${index}]`}
                         value={option.name}
                         checked={input.value.indexOf(option.name) !== -1}
                         onChange={(event) => {
                             const newValue = [...input.value];
                             if (event.target.checked) {
                                 newValue.push(option.name);
                             } else {
                                 newValue.splice(newValue.indexOf(option.name), 1);
                             }

                             return input.onChange(newValue);
                         }}/>
                  {option.name}
              </label>
          </div>)
      });
  }

  render() {
      return (
          <div>
              {this.checkboxGroup()}
          </div>
      )
  }
}


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

            < Field name = "skills" component={CheckboxGroup} option={chooseSkills} />
            < Field name = "interests" component={CheckboxGroup} option={chooseInterests} />

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
