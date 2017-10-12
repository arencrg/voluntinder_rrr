import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class OneOpp extends Component {

  render() {
    console.log("You have chosen an opp! It should be displayed here.")
    console.log(this.props.chosenOpp);


    var reqSkills = this.props.chosenOpp.skills.filter(function (skill) {
      if (skill.val == true) {return (skill)} });

    console.log(reqSkills)

    var reqInterests = this.props.chosenOpp.interests.filter(function (interest) {
      if (interest.val == true) {return (interest)} });

    return (
        <div>
            <h2>{this.props.chosenOpp.name}</h2>
            <h3>About this opportunity</h3>
            <p>{this.props.chosenOpp.description}</p>
            <p>{this.props.chosenOpp.startdate} - {this.props.chosenOpp.enddate}</p>
            <h3>Skill Requirements</h3>
              <ul>
                {reqSkills.map((skill, i) => <li key={i}>{skill.name}</li>)}
              </ul>
            <h3>Related Fields/ Topics</h3>
              <ul>
                {reqInterests.map((interest, i) => <li key={i}>{interest.name}</li>)}
              </ul>

            <Link to="/">Back</Link>
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        chosenOpp: state.chosenOpp
    };
}

export default connect(mapStateToProps)(OneOpp);
