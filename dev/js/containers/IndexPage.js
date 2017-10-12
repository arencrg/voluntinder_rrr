import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index';
import { Row, Col, Card } from 'react-materialize';

import IntroWithProfile from './IntroWithProfile'
import IntroWithoutProfile from './IntroWithoutProfile'

class IndexPage extends Component {
  showSomeOpps(){
    return this.props.opps.slice(0, 3).map((opps, i) => {
      return(
         <Col s={12} m={4}>
          <Link to={`/opportunity/${opps.id}`}>
            <Card id="oppscard">
              <h5 key={i} onClick={() => this.props.openOneOpp(opps)}>{opps.name}</h5>
            </Card>
          </Link>
        </Col>
      );
    })
  }

    render() {
      if (!this.props.user) {
          return (
            <div>
              <p><center>Our team believes that work done for no one's benefit is time wasted. The problem we've decided to focus on is the lack of resources to find meaningful projects for people to dedicate themselves to, so we decided to create a matching platform for volunteer experiences.
              <br/><br/>Check out some of our available volunteer opportunities below.</center></p>
              <Row>
              {this.showSomeOpps()}
              </Row>
              <IntroWithoutProfile />
            </div>
          );
        }
        else {
          return(
            <div>
              <p><center>Our team believes that work done for no one's benefit is time wasted. The problem we've decided to focus on is the lack of resources to find meaningful projects for people to dedicate themselves to, so we decided to create a matching platform for volunteer experiences.
              <br/><br/>Check out some of our available volunteer opportunities below.</center></p>
              <Row>
              {this.showSomeOpps()}
              </Row>
              <IntroWithProfile/>
            </div>
          );
        }
  }
}

function mapStateToProps(state) {
    return {
        opps: state.opps,
        user: state.user
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({openOneOpp: openOneOpp}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(IndexPage);
