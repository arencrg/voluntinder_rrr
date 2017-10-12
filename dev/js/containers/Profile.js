import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-materialize';

class Profile extends Component {
    render() {

      console.log("This is your user profile, your info should be displayed here.")
      console.log(this.props.user);

      var mySkills = this.props.user.skills.filter(function (skill) {
        if (skill.val == true) {return (skill)} });
      var myInterests = this.props.user.interests.filter(function (interest) {
        if (interest.val == true) {return (interest)} });


      return(
      <div className="container">
      <Card id="profilecard">
      <Row>
      <Col s={8}>
        <h3>{this.props.user.name}</h3>
        <h5>{this.props.user.age}, {this.props.user.location}</h5>
          <p>{this.props.user.about}</p>

              <h5>Contact Details</h5>
              <p>{this.props.user.email} | {this.props.user.contactno}</p>

        </Col>
        <Col s={4}>
            <img src ="https://image.flaticon.com/icons/svg/181/181549.svg" alt = "User"/>
        </Col>
        </Row>
          <h4>My Skills</h4>
                {mySkills.map((skill, i) => <li key={i}>{skill.name}</li>)}
          <h4>Interests</h4>
                {myInterests.map((interest, i) => <li key={i}>{interest.name}</li>)}
          <br/>

        </Card>

          <Row>
            <Col s={12} m={6} >
            <Link to="/opportunities">
               <Card id="routescard">
                 <h5>View all opportunities</h5>
               </Card>
            </Link>
            </Col>

            <Col s={12} m={6} >
            <Link to="/">
               <Card id="routescard">
                 <h5>Home</h5>
               </Card>
            </Link>
              </Col>
            </Row>

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
