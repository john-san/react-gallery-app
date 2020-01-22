import React from 'react';
import Photo from './Photo';

const Results = props => {
  const results = props.data;
  let photos = results.map(photo => 
    <Photo 
      src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg/`} 
      key={photo.id} 
    />
  );

  return ( 
    <div className='results'>
      { props.query ? <h2>Results for "{props.query}"</h2> : <h2>Results</h2> }
      

      <ul>
        { photos }
      </ul>
    </div>
  );
}
  

export default Results;