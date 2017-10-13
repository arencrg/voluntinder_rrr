import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index';
import { Row, Col, Card } from 'react-materialize';

class SampleOpps extends Component {
  showAnOpp(){
    var opp = this.props.opps[Math.floor(Math.random()*this.props.opps.length)];
    console.log(opp);
    console.log(opp.name);

      return(
         <Col s={12} m={4}>
          <Link to={`/opportunity/${opp.id}`}>
            <Card id="oppscard">
              <h5 onClick={() => this.props.openOneOpp(opp)}>{opp.name}</h5>
            </Card>
          </Link>
        </Col>
      );
  }

    render() {
          return (
              <div>
              {this.showAnOpp()}
              </div>
          );
        }
}

function mapStateToProps(state) {
    return {
        opps: state.opps,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({openOneOpp: openOneOpp}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SampleOpps);
