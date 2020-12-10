import React from 'react';
import './App.css';
import {Provder} from './context/globalcontext' 



function App() {

  return (
    <Provder>
      <div className="App">
        Todo
      </div>
    </Provder>
  );
}

export default App;
