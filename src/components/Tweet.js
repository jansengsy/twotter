import React from 'react';
import './tweet.css';

const Tweet = (props) => {
  return (
    <div className='tweet-container'>
      <div className='tweet-header'>
        <p className='tweet-user'>@{props.user}</p>
      </div>
      <div className='tweet-content'>
        <p className='tweet-message'>{props.message}</p>
      </div>
    </div>
  );
};

export default Tweet;
