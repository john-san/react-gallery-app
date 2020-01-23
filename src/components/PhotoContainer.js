import React, { useContext } from 'react';
import { AppContext } from './Context';
import Results from './Results';
import NoResults from './NoResults';

const PhotoContainer = () => {
  
  const { photos, loading } = useContext(AppContext);
  const resultsFound = photos.length > 0;
  return (
    <div className="photo-container">
      {
        loading ?
          <h2>Loading...</h2>
        :
          resultsFound ? <Results /> : <NoResults /> 
      }
    </div>
  );
}

export default PhotoContainer;