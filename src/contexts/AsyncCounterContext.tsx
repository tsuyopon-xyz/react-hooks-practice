import React, { Dispatch, useCallback, useReducer } from 'react';
import {
  CountState,
  CountAction,
  reducer,
  initialState,
} from 'src/reducers/count-reducer';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

type ContextType = {
  state: CountState;
  dispatch: Dispatch<CountAction>;
};

export const AsyncCounterContext = React.createContext({} as ContextType);

export const AsyncCounterProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const asyncDispatch = useCallback((action: CountAction) => {
    setTimeout(() => {
      dispatch(action);
    }, 1000);
  }, []);

  return (
    <AsyncCounterContext.Provider value={{ state, dispatch: asyncDispatch }}>
      {children}
    </AsyncCounterContext.Provider>
  );
};
