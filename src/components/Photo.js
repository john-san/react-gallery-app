import React from 'react';

const Photo = (props) => (
  <li>
    <img src={props.src} alt={props.alt} />
  </li>
);

export default Photo;