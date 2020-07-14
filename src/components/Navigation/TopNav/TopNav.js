import React from 'react';

import Brand from './Brand/Brand';

const topNav = (props) => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <Brand />
  </nav>
);

export default topNav;
