import React from 'react';
import './App.css';
import ReactRotatingText from 'react-rotating-text';
function App() {
  return (
    <div className="Main">
      <header className="Main-Header">
        <ReactRotatingText items={['Hi Alex','I\'m', 'Buying you', 'Planet Zoo']}/>
      </header>
    </div>
  );
}

export default App;
