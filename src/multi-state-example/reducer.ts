import {Action} from "./actions";

export interface State {
  loading: boolean;
  error: string | null;
  data: any | null;
}

export const initialState: State = {
  loading: false,
  error: null,
  data: null,
};


export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "LOAD_CURRENCY_DATA":
      return {
        loading: true,
        error: null,
        data: null,
      };
    case "LOAD_CURRENCY_DATA_SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case "LOAD_CURRENCY_DATA_ERROR":
      return {
        loading: false,
        error: action.error,
        data: null,
      };
  }
}