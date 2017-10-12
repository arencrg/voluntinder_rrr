import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Card } from 'react-materialize';

class IntroWithProfile extends Component {
  render() {
      return(
          <Row>
            <Col s={12} m={6} >
            <Link to="/opportunities">
               <Card id="routescard">
                 <h5>View all opportunities</h5>
               </Card>
            </Link>
            </Col>

            <Col s={12} m={6} >
            <Link to="/profile">
               <Card id="routescard">
                 <h5>View your profile</h5>
               </Card>
            </Link>
              </Col>
            </Row>
      );
    }
}

export default IntroWithProfile;
