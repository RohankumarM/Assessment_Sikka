import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Information from './components/Information';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app_bottom">
        <SubHeader />
        <Information />
      </div>
    </div>
  );
}

export default App;
