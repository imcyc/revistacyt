import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{width: '30em'}} />
      </header>
    </div>
  );
}

export default App;
