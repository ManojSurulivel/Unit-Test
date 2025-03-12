import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App1() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Logo</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
