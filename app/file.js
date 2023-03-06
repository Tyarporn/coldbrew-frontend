import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;