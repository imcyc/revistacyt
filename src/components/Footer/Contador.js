import React, { useReducer } from 'react';

function reducer(state, action){
  switch(action.type){
    case "INCREMENT":
      return { count: state.count + action.amount};
    case "DECREMENT":
      return { count: state.count - action.amount};
    case "RESET":
        return { count: 0}
  }
}

function Contador(){
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return(
    <div className='contador'>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type:'INCREMENT', amount: 1})}>add 1</button>
      <button onClick={() => dispatch({type:'INCREMENT', amount: 5})}>add 5</button>
      <button onClick={() => dispatch({type:'DECREMENT', amount: 1})}>Remove 1</button>
      <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
    </div>
  )
}

export default Contador;