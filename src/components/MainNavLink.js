import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavLink = (props) => {
  const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1);
  const capitalized = capitalize(props.topic);
  const lowercased = props.topic.toLowerCase();

  return (
    <li>
      <NavLink to={`/main/${lowercased}`}>
        { capitalized }
      </NavLink>
    </li>
  );
}

export default MainNavLink;