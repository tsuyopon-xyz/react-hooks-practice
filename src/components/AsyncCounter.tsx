import { useContext } from 'react';
import { AsyncCounterContext } from 'src/contexts/AsyncCounterContext';

const AsyncCounter: React.VFC = () => {
  const { dispatch } = useContext(AsyncCounterContext);

  return (
    <div>
      <h2>AsyncCounter.tsx（クリックして1秒後に更新）</h2>
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

export default AsyncCounter;
