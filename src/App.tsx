import Counter from 'src/components/Counter';
import AsyncCounter from 'src/components/AsyncCounter';
import ContextShower from 'src/components/ContextShower';
import { CounterProvider } from 'src/contexts/CounterContext';
import { AsyncCounterProvider } from 'src/contexts/AsyncCounterContext';

function App() {
  return (
    <CounterProvider>
      <AsyncCounterProvider>
        <Counter />
        <AsyncCounter />
        <hr />
        <ContextShower />
      </AsyncCounterProvider>
    </CounterProvider>
  );
}

export default App;
