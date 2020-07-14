import React from 'react';

import NavLink from './NavLink/NavLink';

const navItem = (props) => (
  <li className={props.classes}>
    <NavLink
      classes="nav-link"
      link={props.url}>{props.text}
    </NavLink>
  </li>
);

export default navItem;
