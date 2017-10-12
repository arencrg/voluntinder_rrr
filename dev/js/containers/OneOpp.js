import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'react-materialize';

class OneOpp extends Component {
  render() {
    console.log("You have chosen an opp! It should be displayed here.")

    var reqSkills = this.props.chosenOpp.skills.filter(function (skill) {
      if (skill.val == true) {return (skill.name)} });
    var reqInterests = this.props.chosenOpp.interests.filter(function (interest) {
      if (interest.val == true) {return (interest.name)} });

    var mySkills = this.props.user.skills.filter(function (skill) {
      if (skill.val == true) {return (skill.name)} });
    var myInterests = this.props.user.interests.filter(function (interest) {
      if (interest.val == true) {return (interest.name)} });

    var listReqSkills = reqSkills.map(a => a.name);
    var listMySkills = mySkills.map(a => a.name);
    var x = listReqSkills.filter((n) => listMySkills.includes(n))

    var listReqInterests = reqInterests.map(a => a.name);
    var listMyInterests = myInterests.map(a => a.name);
    var y = listReqInterests.filter((n) => listMyInterests.includes(n))

    console.log("Skills this opp requires: ");
    console.log(listReqSkills);
    console.log("Skills you have: ")
    console.log(listMySkills);
    console.log("Skills intersect: " + x + "\n That's " + x.length + " skill/s btw.");

    console.log("Fields this opp is in: ");
    console.log(listReqInterests);
    console.log("Causes you're interested in: ")
    console.log(listMyInterests);
    console.log("Interests intersect: " + y + "\n That's " + y.length + " field/s btw.");

    // LET'S DO SOME MATH
    var whatIneed = reqSkills.length + reqInterests.length,
        whatIhave = x.length + y.length,
        matchpercent = Math.round(((whatIhave/whatIneed*100)) * 100) / 100

    console.log("You are a "+ matchpercent+"% match for this project!!!")

    return (
      <div className="container">
        <div id = "indextext">
            <h2>{this.props.chosenOpp.name}</h2>
            <p>{this.props.chosenOpp.description}</p>
        </div>
        <Row>
        <Col xs={12} m={6}>
            <h4>Dates</h4>
            <p>{this.props.chosenOpp.startdate} - {this.props.chosenOpp.enddate}</p>
            <h4>Job Description</h4>
            <p>{this.props.chosenOpp.lipsum}</p>
        </Col>

        <Col xs={12} m={6}>
            <h4>Skill Requirements</h4>
              <ul>
                {reqSkills.map((skill, i) => <li key={i}>{skill.name}</li>)}
              </ul>
            <h4>Related Fields/ Topics</h4>
              <ul>
                {reqInterests.map((interest, i) => <li key={i}>{interest.name}</li>)}
              </ul>
        </Col>
        </Row>
        <div id = "indextext">
          <h3>According to our algorithms, you are a {matchpercent}% match for this project!</h3>
        </div>
          <Row>
          <Col xs={12} m={6} offset = 's0 m3'>
            <Link to="/">
              <Card id="routescard">
                <h5>Back</h5>
              </Card>
            </Link>
          </Col>
          </Row>

        </div>

    );
  }
}

function mapStateToProps(state) {
    return {
        chosenOpp: state.chosenOpp,
        user: state.user[0]
    };
}

export default connect(mapStateToProps)(OneOpp);
