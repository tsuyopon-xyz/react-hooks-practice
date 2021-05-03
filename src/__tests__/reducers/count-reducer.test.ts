import { reducer, CountState, CountAction } from 'src/reducers/count-reducer';

describe('counter-reducer test.', () => {
  test('The increment action', () => {
    const action: CountAction = {
      type: 'increment',
    };
    const initialState: CountState = {
      count: 0,
    };

    const state1 = reducer(initialState, action);
    const state2 = reducer(state1, action);

    expect(state1).toStrictEqual({
      count: 1,
    });
    expect(state2).toStrictEqual({
      count: 2,
    });
  });

  test('The decrement action', () => {
    const action: CountAction = {
      type: 'decrement',
    };
    const initialState: CountState = {
      count: 10,
    };

    const state1 = reducer(initialState, action);
    const state2 = reducer(state1, action);

    expect(state1).toStrictEqual({
      count: 9,
    });
    expect(state2).toStrictEqual({
      count: 8,
    });
  });
});
