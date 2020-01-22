import React from 'react';
import { Consumer } from './Context';
import MainNavLink from './MainNavLink';

const Nav = () => {
  return (
    <Consumer>
      {
        context => {
          const links = context.defaultTopics
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
      }
    </Consumer>
  
  );
}
export default Nav;