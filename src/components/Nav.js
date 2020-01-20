import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/cats' onClick={() => props.performSearch("cats")}>Cats</NavLink></li>
      <li><NavLink to='/dogs' onClick={() => props.performSearch("dogs")}>Dogs</NavLink></li>
      <li><NavLink to='/computers' onClick={() => props.performSearch("computer")}>Computers</NavLink></li>
    </ul>
  </nav>
);

export default Nav;