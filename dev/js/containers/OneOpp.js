import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Card } from 'react-materialize';

class OneOpp extends Component {

applyClick(){
  alert("Thank you for applying! We will be processing your application asap. Please wait for further instructions.")
  browserHistory.push('/opportunities');
}

  render() {
    console.log("You have chosen an opp! It should be displayed here.")
    console.log(this.props.chosenOpp);

    var reqSkills = this.props.chosenOpp.skills.filter(function (skill) {
      if (skill.val == true) {return (skill)} });
    var reqInterests = this.props.chosenOpp.interests.filter(function (interest) {
      if (interest.val == true) {return (interest)} });

    return (
      <div>
        <Row>
        <Col s={12} m={6}>
            <h2>{this.props.chosenOpp.name}</h2>
            <p>{this.props.chosenOpp.description}</p>
            <p>{this.props.chosenOpp.startdate} - {this.props.chosenOpp.enddate}</p>

                <Row>
                <Col s={12} m={6} >
                  <Link to="/">
                    <Card id="showallcard">
                      <h5 onClick={this.handleClick}>Apply</h5>
                    </Card>
                  </Link>
                </Col>

                <Col s={12} m={6} >
                  <Link to="/">
                    <Card id="showprofilecard">
                      <h5>Back</h5>
                    </Card>
                  </Link>
                </Col>
                </Row>

        </Col>

<br/><br/>
        <Col s={12} m={6}>
            <h3>Skill Requirements</h3>
              <ul>
                {reqSkills.map((skill, i) => <li key={i}>{skill.name}</li>)}
              </ul>
            <h3>Related Fields/ Topics</h3>
              <ul>
                {reqInterests.map((interest, i) => <li key={i}>{interest.name}</li>)}
              </ul>
        </Col>
        </Row>

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
