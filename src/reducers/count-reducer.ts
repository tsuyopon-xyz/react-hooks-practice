export type CountState = {
  count: number;
};

export type CountAction = {
  type: 'increment' | 'decrement';
};

export const initialState: CountState = {
  count: 0,
};

export const reducer = (
  state = initialState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error('Invalid action type in Count Reducer.');
  }
};
