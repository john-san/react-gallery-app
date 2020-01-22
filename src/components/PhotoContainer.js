import React from 'react';
import { Consumer } from './Context';
import Results from './Results';
import NoResults from './NoResults';

const PhotoContainer = () => {
  return (
    <Consumer>
      {
        context => {
          const resultsFound = context.photos.length > 0;

          return (
            <div className="photo-container">
              {
                context.loading ?
                  <h2>Loading...</h2>
                :
                  resultsFound ? <Results /> : <NoResults /> 
              }
            </div>
          );
        }
      }
    </Consumer>
    
  );
}

export default PhotoContainer;