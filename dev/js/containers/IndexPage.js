import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index';
import { Row, Col, Card } from 'react-materialize';

import IntroWithProfile from './IntroWithProfile';
import IntroWithoutProfile from './IntroWithoutProfile';
import SampleOpps from './SampleOpps';

class IndexPage extends Component {
    render() {
      const welcomeInfo =
        <p>Our team believes that work done for no one's benefit is time wasted. The problem we've decided to focus on is the lack of resources to find meaningful projects for people to dedicate themselves to, so we decided to create a matching platform for volunteer experiences.
        <br/><br/>Check out some of our available volunteer opportunities below.</p>

          if (!this.props.user) {
              return (
                <div id="indextext">
                    {welcomeInfo}
                    <Row>
                    <SampleOpps />
                    <SampleOpps />
                    <SampleOpps />
                    </Row>
                    <IntroWithoutProfile />
                </div>
              );
            }
            else {
              return(
                <div id="indextext">
                    {welcomeInfo}
                    <Row>
                    <SampleOpps />
                    <SampleOpps />
                    <SampleOpps />
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
