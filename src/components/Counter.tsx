import { useContext, memo } from 'react';
import { CounterContext } from 'src/contexts/CounterContext';

const Counter: React.VFC = () => {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <h2>Counter.tsx</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
    </div>
  );
};

export default memo(Counter);
