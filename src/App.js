import './App.css';
import Compose from './components/Compose';
import Feed from './components/Feed';

import TweetContextProvider from './context/TweetContextProvider';

function App() {
  return (
    <div className='App'>
      <TweetContextProvider>
        <Compose />
        <Feed />
      </TweetContextProvider>
    </div>
  );
}

export default App;
