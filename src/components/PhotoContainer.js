import React from 'react';
import Results from './Results';
import NoResults from './NoResults';

const PhotoContainer = props => {
  const resultsFound = props.data.length > 0;

  return (
    <div className="photo-container">
      {
        props.isLoading ?
          <h2>Loading...</h2>
        :
          resultsFound ? <Results data={props.data} query={props.query} /> : <NoResults /> 
      }
    </div>
  );
}

export default PhotoContainer;