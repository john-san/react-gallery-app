import React from 'react';

const Photo = (props) => (
  <li>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img src={props.src} alt={props.alt} title={props.alt} />
    </a>
  </li>
);

export default Photo;