import React, { useContext } from 'react';
import { AppContext } from './Context';

import Photo from './Photo';

const Results = () => {
  const context = useContext(AppContext);
  const results = context.photos;
  const photos = results.map(photo => 
    <Photo 
      src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg/`} 
      key={photo.id} 
      alt={photo.title}
    />
  );
  return ( 
    <div className='results'>
      { 
        context.query ? 
          <h2>Results for "{ context.query }"</h2> 
        : 
          <h2>Results</h2> 
      }
      
      <ul>
        { photos }
      </ul>
    </div>
          
  );
}
  

export default Results;