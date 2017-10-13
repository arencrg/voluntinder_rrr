import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'react-materialize';

class OneOpp extends Component {
  render() {
    console.log("You have chosen an opp! It should be displayed here.")

    var reqSkills = this.props.chosenOpp.skills
    var reqInterests = this.props.chosenOpp.interests

    var mySkills = this.props.user.skills
    var myInterests = this.props.user.interests

    var x = reqSkills.filter((n) => mySkills.includes(n))
    var y = reqInterests.filter((n) => myInterests.includes(n))

    console.log("Skills this opp requires: ");
    console.log(reqSkills);
    console.log("Skills you have: ")
    console.log(mySkills);
    console.log("Skills intersect: " + x + "\n That's " + x.length + " skill/s btw.");

    console.log("Fields this opp is in: ");
    console.log(reqInterests);
    console.log("Causes you're interested in: ")
    console.log(myInterests);
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
                {reqSkills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            <h4>Related Fields/ Topics</h4>
              <ul>
                {reqInterests.map((interest, i) => <li key={i}>{interest}</li>)}
              </ul>
        </Col>
        </Row>
        <div id = "indextext">
          <h3>According to our algorithms, you are a {matchpercent}% match for this project!</h3>
        </div>
          <Row>
          <Col s={12} l={6} offset="l3">
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
