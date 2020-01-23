import React, { useContext } from 'react';
import { AppContext } from './Context';
import MainNavLink from './MainNavLink';

const Nav = () => {
  // React v16.6.0 way to use context API
  // https://stackoverflow.com/questions/49870098/how-to-get-the-data-from-react-context-consumer-outside-the-render
  const { mainTopics } = useContext(AppContext);
  const links = Object.keys(mainTopics)
    .map((topic, idx) => 
      <MainNavLink topic={topic} key={idx} />
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