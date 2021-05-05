import React, { Dispatch, useReducer } from 'react';
import {
  CountState,
  CountAction,
  reducer,
  initialState,
} from 'src/reducers/count-reducer';

type ContextType = {
  state: CountState;
  dispatch: Dispatch<CountAction>;
};

export const CounterContext = React.createContext({} as ContextType);

export const CounterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
