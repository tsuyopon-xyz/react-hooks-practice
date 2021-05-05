import Counter from 'src/components/Counter';
import ContextShower from 'src/components/ContextShower';
import { CounterProvider } from 'src/contexts/CounterContext';

function App() {
  return (
    <CounterProvider>
      <Counter />
      <hr />
      <ContextShower />
    </CounterProvider>
  );
}

export default App;
