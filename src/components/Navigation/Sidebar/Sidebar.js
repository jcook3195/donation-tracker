import React, { Component } from 'react';

import NavItems from '../../Navigation/NavItems/NavItems';

import './Sidebar.css';

class Sidebar extends Component {
  state = {
    links: [
      {
        "key": "dash",
        "classes": "nav-item",
        "url": "https://facebook.com",
        "text": "Dashboard"
      },
      {
        "key": "donors",
        "classes": "nav-item",
        "url": "/#",
        "text": "Donors"
      },
      {
        "key": "reports",
        "classes": "nav-item",
        "url": "/#",
        "text": "Reports"
      }
    ]
  }

  render() {
    return(
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sticky-sidebar">
        <NavItems
          listClasses="nav flex-column"
          links={this.state.links} />
        </div>
      </nav>
    );
  }
}

export default Sidebar;
