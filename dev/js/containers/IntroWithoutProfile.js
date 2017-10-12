import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card } from 'react-materialize';

class IntroWithoutProfile extends Component {
  render() {
      return(
          <Row>
            <Col s={12} m={6} >
            <Link to="/opportunities">
               <Card id="showallcard">
                 <h5>View all opportunities</h5>
               </Card>
            </Link>
            </Col>

            <Col s={12} m={6} >
            <Link to="/createprofile">
               <Card id="showprofilecard">
                 <h5>Create your profile</h5>
               </Card>
            </Link>
            </Col>
            </Row>
      );
    }
}

export default IntroWithoutProfile;
