import React, { useReducer } from 'react';
import { reducer as CounterReducer } from 'src/reducers/count-reducer';

export default function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });

  return (
    <div>
      <p>現在の値 : {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}
