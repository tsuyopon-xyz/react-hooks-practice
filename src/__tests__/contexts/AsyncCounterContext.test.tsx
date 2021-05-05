import React, { useContext } from 'react';
import { render, fireEvent, act, RenderResult } from '@testing-library/react';
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

describe('AsyncCounterContext.test.ts', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    // See: https://jestjs.io/ja/docs/timer-mocks
    jest.useFakeTimers();
    const component = CustomElement();
    renderResult = render(component);
  });

  test('Increment count 1 second later after clicking the "Increment" button', async () => {
    const { getByText } = renderResult;

    expect(getByText(/^Current count:/)).toHaveTextContent('Current count: 0');

    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);

    // See: https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
    // Case 2: Jest Fake Timers
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText(/^Current count:/)).toHaveTextContent('Current count: 1');
  });

  test('Decrement count 1 second later after clicking the "Decrement" button', async () => {
    const { getByText } = renderResult;

    expect(getByText(/^Current count:/)).toHaveTextContent('Current count: 0');

    const incrementButton = getByText('Decrement');
    fireEvent.click(incrementButton);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText(/^Current count:/)).toHaveTextContent('Current count: -1');
  });
});
