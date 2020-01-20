import React, { Component } from 'react';
import Results from './Results';
import NoResults from './NoResults';

class PhotoContainer extends Component {
  
  render() {
  const resultsFound = this.props.data.length > 0;

    return (
      <div className="photo-container">
        { resultsFound ? <Results data={this.props.data} /> : <NoResults /> }
      </div>
    );
  }
} 

export default PhotoContainer;