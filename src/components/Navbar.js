import React from 'react';
import {BrowserRouter as Router,
  Link} from 'react-router-dom';

function Navbar() {
  return (
    <Router>
      <div>
        <nav>
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </nav>


      </div>
    </Router>
  )
}

export default Navbar;
