import React from 'react';

const NoResults = () => (
  <div className="no-results">
    <ul>
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>Unfortunately, your search did not return any results. <br />
          Please try a different search.</p>
      </li>
    </ul>
  </div>
);

export default NoResults;