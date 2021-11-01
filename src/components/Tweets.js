import React, { Fragment } from 'react';
import Tweet from './Tweet';
import { useContext } from 'react';
import { TweetContext } from '../context/TweetContextProvider';

import './feed.css';

const Tweets = () => {
  const { tweets } = useContext(TweetContext);

  return (
    <div>
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <Tweet key={tweet.id} user={tweet.user} message={tweet.message} />
        ))
      ) : (
        <div>
          <h3>Empty feed...</h3>
        </div>
      )}
    </div>
  );
};

export default Tweets;
