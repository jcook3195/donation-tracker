import React from 'react';

import Aux from '../Aux/Aux';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import './Layout.css';

const layout = ( props ) => (
  <Aux>
    <TopNav />
    <div>
      Side Navigation
    </div>
    <main className="content">
      {props.children}
    </main>
  </Aux>
);

export default layout;
