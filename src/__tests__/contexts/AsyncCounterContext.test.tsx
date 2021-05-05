import React, { useContext } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import {
  AsyncCounterContext,
  AsyncCounterProvider,
} from 'src/contexts/AsyncCounterContext';

const ProviderComponent: React.VFC = () => {
  const { state, dispatch } = useContext(AsyncCounterContext);

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
    <AsyncCounterProvider>
      <ProviderComponent />
    </AsyncCounterProvider>
  );
};

// See: https://jestjs.io/ja/docs/timer-mocks
// jest.useFakeTimers();

describe('AsyncCounterContext.test.ts', () => {
  test('values in provider', async () => {
    const component = CustomElement();
    render(component);

    expect(screen.getByText(/^Current count:/)).toHaveTextContent(
      'Current count: 0'
    );

    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    UserEvent.click(incrementButton);

    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    // jest.advanceTimersByTime(1000);

    await waitFor<void>(
      () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            expect(screen.getByText(/^Current count:/)).toHaveTextContent(
              'Current count: 1'
            );
            resolve();
          }, 1000);
        });
      },
      {
        timeout: 5000,
      }
    );

    UserEvent.click(decrementButton);
    await waitFor<void>(
      () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            expect(screen.getByText(/^Current count:/)).toHaveTextContent(
              'Current count: 0'
            );
            resolve();
          }, 1000);
        });
      },
      {
        timeout: 5000,
      }
    );
  });
});
