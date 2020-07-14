import React, { Component } from 'react';

import NavItem from './NavItem/NavItem';

class NavItems extends Component {
  render() {
    return (
      <ul className={this.props.listClasses}>
        {this.props.links.map(link => (
          <NavItem
            key={link.key}
            classes={link.classes}
            url={link.url}
            text={link.text}/>
        ))}
      </ul>
    );
  }
}

export default NavItems;
