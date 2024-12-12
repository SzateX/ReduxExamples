import {Action} from "./actions";

export interface State {
  lightTurnedOn: boolean;
}

export const initialState: State = {
  lightTurnedOn: false,
};


export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'TURN_ON':
      return {
        ...state,
        lightTurnedOn: true,
      };
    case 'TURN_OFF':
      return {
        ...state,
        lightTurnedOn: false,
      };
    default:
      return state;
  }
}