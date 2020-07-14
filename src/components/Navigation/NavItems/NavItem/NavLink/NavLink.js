import React from 'react';

const navLink = (props) => (
  <a className={props.classes} href="/#">
    {props.children}
  </a>
);

export default navLink;
