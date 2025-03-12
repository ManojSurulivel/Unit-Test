import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="container" style={{alignItems:"center"}}>
    <div className="nav-container">
      <Link className="navbar-brand"  to="/">Logo</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;


//navbar navbar-expand-lg navbar-light bg-light