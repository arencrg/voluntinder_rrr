import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openOneOpp } from '../actions/index'

class IndexPage extends Component {

  showSomeOpps(){
    return this.props.opps.slice(0, 4).map((opps, i) => {
      return(
        <div key={i} onClick={() => this.props.openOneOpp(opps)}>
        <Link to={`/opportunity/${opps.id}`}>{opps.name}</Link></div>
      );
    })
  }

    render() {
      return (
      <div>
        <h3>This the index page</h3>
        <p>(Some copy here, something about volunteering and this project, and then show like 3-5 opps then a link to all available opps)</p>
        <h3>Here are some of our available opps!</h3>
        {this.showSomeOpps()}
        <br/>
        <h3>Do you want to see more opps?</h3>
        <Link to="/opportunities">See all opps</Link>
        <br/>
        <h3>Create your profile now!</h3>
        <Link to="/newvolunteer">Create account</Link>
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

export default connect(mapStateToProps, matchDispatchToProps)(IndexPage);
