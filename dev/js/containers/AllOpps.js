import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index'
import { Row, Col, Card } from 'react-materialize';

class AllOpps extends Component {

  showAllOpps(){
    return this.props.opps.map((opps, i) => {
      return(
          <Col s={12} m={4} xl={3}>
            <Card id="oppscard">
              <Link to={`/opportunity/${opps.id}`}>
                  <h5 key={i} onClick={() => this.props.openOneOpp(opps)}>{opps.name}</h5>
              </Link>
            </Card>
          </Col>
      );
    })
  }

  render() {
    return (
      <div>
        <h4><center>Here are all of our available volunteer opportunities:</center></h4>
        <Row>
        {this.showAllOpps()}
        </Row>

        <Row>
          <Col s={12} >
            <Link to="/">
              <Card id="showprofilecard">
                <h5>Back to the main page</h5>
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
        opps: state.opps
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({openOneOpp: openOneOpp}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AllOpps);
