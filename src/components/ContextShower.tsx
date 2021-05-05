import React, { useContext, memo } from 'react';
import { CounterContext } from 'src/contexts/CounterContext';

const ContextShower: React.VFC = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <div>
        <h2>Counter in ContextShower.tsx</h2>
        state in CountContext : {state.count}
      </div>
    </div>
  );
};

export default memo(ContextShower);
