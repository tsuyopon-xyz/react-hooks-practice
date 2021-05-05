import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { CounterContext, CounterProvider } from 'src/contexts/CounterContext';

const ProviderComponent: React.VFC = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Current count: {state.count}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
};

const CustomElement = () => {
  return (
    <CounterProvider>
      <ProviderComponent />
    </CounterProvider>
  );
};

describe('CounterContext.test.ts', () => {
  test('values in provider', () => {
    const component = CustomElement();
    render(component);

    expect(screen.getByText(/^Current count:/)).toHaveTextContent(
      'Current count: 0'
    );

    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    UserEvent.click(incrementButton);
    UserEvent.click(incrementButton);
    expect(screen.getByText(/^Current count:/)).toHaveTextContent(
      'Current count: 2'
    );

    UserEvent.click(decrementButton);
    UserEvent.click(decrementButton);
    UserEvent.click(decrementButton);
    expect(screen.getByText(/^Current count:/)).toHaveTextContent(
      'Current count: -1'
    );
  });
});
