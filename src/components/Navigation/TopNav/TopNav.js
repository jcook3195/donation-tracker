import React, { Component } from 'react';

import Brand from './Brand/Brand';
import NavItems from '../../Navigation/NavItems/NavItems';

class TopNav extends Component {
  state = {
    links: [
      {
        "key": "account",
        "classes": "navbar-nav px-3",
        "url": "/#",
        "text": "Customer Name"
      }
    ]
  }

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <Brand />
        <NavItems
          listClasses="navbar-nav px-3"
          links={this.state.links} />
      </nav>);
  }

}

export default TopNav;
