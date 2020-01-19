import React from 'react';
import Photo from './Photo';
const Results = () => (
  <div class='results'>
    <h2>Results</h2>

    <ul>
      <li>
        <Photo src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"/>
      </li>
      <li>
        <Photo src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" />
      </li>
      <li>
        <Photo src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" />
      </li>
      <li>
        <Photo src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" />
      </li>
    </ul>
  </div>
);

export default Results;