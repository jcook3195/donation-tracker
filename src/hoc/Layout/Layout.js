// Modules
import React from 'react';

// Components
import Aux from '../Aux/Aux';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Dashboard from '../../components/Dashboard/Dashboard';

// Styles
import './Layout.css';

const layout = ( props ) => (
  <Aux>
    <TopNav />
    <div className="container-fluid">
      <div className="row">
      <Sidebar />
        <main className="col-md-9 ml-sm-auto col-lg-10 px-4" role="main">
          <Dashboard />
          {props.children}
        </main>
      </div>=
    </div>
  </Aux>
);

export default layout;
