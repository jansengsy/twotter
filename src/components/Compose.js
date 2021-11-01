import React, { useContext, useState } from 'react';
import { TweetContext } from '../context/TweetContextProvider';
import icon from '../res/images/default_user.jpg';
import './compose.css';

const Compose = () => {
  const { dispatch } = useContext(TweetContext);
  const [user, setUser] = useState('JansenGSY');
  const [message, setTweet] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'NEW_TWEET', tweet: { user, message } });
  };
  const clearTweets = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_TWEETS', tweet: {} });
  };

  return (
    <div className='tweet-compose-container'>
      <form onSubmit={onSubmit}>
        <img className='user-icon' src={icon} alt='user icon' />
        <input
          type='text'
          className='tweet-compose-text'
          placeholder='Tweet your friends...'
          onChange={(e) => setTweet(e.target.value)}
          required
        />
        <div className='tweet-compose-submit-container'>
          <input
            type='submit'
            className='tweet-compose-submit'
            value='Tweet!'
          />
        </div>
      </form>
    </div>
  );
};

export default Compose;
