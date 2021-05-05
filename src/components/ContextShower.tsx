import React, { useContext } from 'react';
import { CounterContext } from 'src/contexts/CounterContext';
import { AsyncCounterContext } from 'src/contexts/AsyncCounterContext';

const ContextShower: React.VFC = () => {
  const { state: counterState } = useContext(CounterContext);
  const { state: asyncCounterState } = useContext(AsyncCounterContext);

  return (
    <div>
      <div>
        <h2>Counter in ContextShower.tsx</h2>
        state in CountContext : {counterState.count}
      </div>
      <div>
        <h2>AsyncCounter in ContextShower.tsx</h2>
        state in AsyncCountContext : {asyncCounterState.count}
      </div>
    </div>
  );
};

export default ContextShower;
