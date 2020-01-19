import React, { Component } from 'react';
import Results from './Results';
import NoResults from './NoResults';

class PhotoContainer extends Component {
  
  render() {
    return (
      <div class="photo-container">
        <Results />
        <NoResults />
      </div>
    );
  }
} 

export default PhotoContainer;