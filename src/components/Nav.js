import React from 'react';
import { Link } from 'react-router-dom';


const Nav = ({query}) => {
  // Must use custom validation for active class b/c query strings don't work w/ React Router
  // https://github.com/ReactTraining/react-router/issues/6268
  const isActive = (str) => str === query;

  return (
  <nav className="main-nav">
    <ul>
      <li>
        <Link 
          to={{ pathname: '/search', search: '?q=cats'}}
          className={ isActive('cats') ? 'active' : '' }  
        >
          Cats
        </Link>
      </li>
      <li>
        <Link 
          to={{ pathname: '/search', search: '?q=dogs'}}
          className={ isActive('dogs') ? 'active' : '' }  
        >
          Dogs
        </Link>
      </li>
      <li>
        <Link 
          to={{ pathname: '/search', search: '?q=computers'}}
          className={ isActive('computers') ? 'active' : '' }  
        >
          Computers
        </Link>
      </li>
    </ul>
  </nav>
  );
}
export default Nav;