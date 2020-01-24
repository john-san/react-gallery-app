import React, { useContext } from 'react';
import { AppContext } from './Context';

import Photo from './Photo';

const Results = () => {
  const {photos, query} = useContext(AppContext);
  const renderedPhotos = photos.map(photo => 
    <Photo 
      src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg/`} 
      key={photo.id} 
      alt={photo.title}
      link={`https://www.flickr.com/photos/${photo.owner}/${photo.id}/`}
    />
  );

  return ( 
    <div className='results'>
      { 
        query ? 
          <h2>Results for "{ query }"</h2> 
        : 
          <h2>Results</h2> 
      }
      
      <ul>
        { renderedPhotos }
      </ul>
    </div>
          
  );
}
  

export default Results;