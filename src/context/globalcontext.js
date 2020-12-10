import React, {createContext , useReducer} from 'react';

import AppReducer from './AppReducer'

let initialState = {
  users : [{"id" : "1", name :"Kamal uddin"}]
}

const ValueContext = createContext(initialState, ()=> {})

let Provder = (props)=> {
  let [state, dipatch] = useReducer(AppReducer,initialState)
  return(
  <ValueContext.Provider value = {state}> 
    <div>
      {props.children}
    </div>
  </ValueContext.Provider>
  )
}

export {Provder, ValueContext} 