import React from 'react';
import { Link } from 'react-router-dom';

const MainNavLink = (props) => {
  // Must use custom validation for active class b/c query strings don't work w/ React Router
  // https://github.com/ReactTraining/react-router/issues/6268
  const isActive = (str) => str === props.query;
  const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1);

  const capitalized = capitalize(props.topic);
  const lowercased = props.topic.toLowerCase();

  return (
    <li>
      <Link 
        to={{ pathname: '/search', search: `?q=${lowercased}`}}
        className={ isActive(`${lowercased}`) ? 'active' : '' }  
      >
        { capitalized }
      </Link>
    </li>
  );
}

export default MainNavLink;