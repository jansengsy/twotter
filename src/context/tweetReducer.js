import { v4 as uuidv4 } from 'uuid';

export const tweetReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_TWEET':
      return [
        ...state,
        {
          user: action.tweet.user,
          message: action.tweet.message,
          id: uuidv4(),
        },
      ];
    case 'CLEAR_TWEETS':
      state = [];
      return state;
    default:
      return state;
  }
};

export default tweetReducer;
