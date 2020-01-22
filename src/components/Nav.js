import React from 'react';
import MainNavLink from './MainNavLink';


const Nav = ({query}) => {
  const defaultTopics = [
    "Cats",
    "Dogs",
    "Computers"
  ];

  const links = defaultTopics.map(
    (topic, idx) => <MainNavLink topic={topic} query={query} key={idx} />
  );

  return (
  <nav className="main-nav">
    <ul>
      { links }
    </ul>
  </nav>
  );
}
export default Nav;