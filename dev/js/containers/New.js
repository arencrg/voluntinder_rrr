import React, { Component } from 'react';
import { Link } from 'react-router';

class New extends Component {
    render() {
      return(
      <div>
        <h3>Here we will show the user page.</h3>
        <Link to="/">Back</Link>
      </div>

      )
    }
}

export default New;
