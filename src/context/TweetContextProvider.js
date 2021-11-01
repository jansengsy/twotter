import React, { createContext, useReducer, useEffect } from 'react';
import tweetReducer from './tweetReducer';

export const TweetContext = createContext({});

const TweetContextProvider = (props) => {
  const [tweets, dispatch] = useReducer(tweetReducer, [], () => {
    const localData = localStorage.getItem('tweets');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  return (
    <TweetContext.Provider value={{ tweets, dispatch }}>
      {props.children}
    </TweetContext.Provider>
  );
};

export default TweetContextProvider;
