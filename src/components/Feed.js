import React from 'react';
import Tweet from './Tweet';

import './feed.css';

const Feed = () => {
  return (
    <div className='feed-container'>
      <Tweet user='JansenGSY' message='Hello, world!' />
    </div>
  );
};

export default Feed;
