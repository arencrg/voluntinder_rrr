import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index'

class AllOpps extends Component {

  showAllOpps(){
    return this.props.opps.map((opps, i) => {
      return(
        <div key={i} onClick={() => this.props.openOneOpp(opps)}>
        <Link to={`/opportunity/${opps.id}`}>{opps.name}</Link>
        <br/>{opps.description}<br/> <br/></div>
      );
    })
  }

  render() {
    return (
      <div>
        <h3>Here we will show all the available opps.</h3>
        {this.showAllOpps()}

        <br/>
        <Link to="/">Back</Link>
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
