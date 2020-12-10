import React from 'react';
import './App.css';
import Todo from './todo'
import {Provder} from './context/globalcontext' 
import PDF from './pdf'



function App() {

  return (
    <Provder>
      <div className="App">
        {/* <Todo /> */}
        Todo
      </div>
<PDF />

    </Provder>
  );
}

export default App;
