import React from 'react';
import './App.css';
import CoreContext from './modules/core/core.context';
import Oscillators from './modules/oscillators';

const App: React.FC = () => {
  return (
    <div className="App">
      <CoreContext.Provider
        value={{
          audioContext: new AudioContext()
        }}
      >
        <Oscillators />
      </CoreContext.Provider>
    </div>
  );
}

export default App;
