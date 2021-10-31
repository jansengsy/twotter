import React from 'react';
import icon from '../res/images/default_user.jpg';
import './compose.css';

const Compose = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  return (
    <div className='tweet-compose-container'>
      <form onSubmit={onSubmit}>
        <img className='user-icon' src={icon} alt='user icon' />
        <input
          type='text'
          className='tweet-compose-text'
          placeholder='Tweet your friends...'
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
