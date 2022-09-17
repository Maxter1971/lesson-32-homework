export type AbstractAction = {
  type: string;

  payload?: any;
};

export type AbstractState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AbstractDispatch = (action: AbstractAction) => any;

export type AbstractReducer = (
  inputState: AbstractState | undefined,
  action: AbstractAction
) => AbstractState;

export function combineReducers(config?: {}) {
  return (state: AbstractState = {}, action?: {}) => {
    const result: AbstractState = {};

    const conf = config as { [index: string]: AbstractReducer };
    for (const key in conf) {
      const reducer = conf[key];

      result[key] = reducer(state[key], action as AbstractAction);
    }

    return result;
  };
}
