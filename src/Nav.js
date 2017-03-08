import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Devmountain Zoo</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="animals">Animals</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Nav