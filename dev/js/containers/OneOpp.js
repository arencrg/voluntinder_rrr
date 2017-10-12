import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class OneOpp extends Component {

  render() {
    console.log("You have chosen an opp! It should be displayed here.")
    console.log(this.props.chosenOpp);

    if (!this.props.chosenOpp) {
        return (<div>Something went wrong! Please go back to the home page.</div>);
    }

    return (
        <div>
            <h3>Here we will show one specific opp.</h3>
            <h3>{this.props.chosenOpp.name}</h3>
            <p>{this.props.chosenOpp.description}</p>
            <Link to="/">Back</Link>
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
