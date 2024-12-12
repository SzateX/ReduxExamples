interface LoadCurrencyDataAction {
  type: 'LOAD_CURRENCY_DATA';
  payload: {
    tableType: string;
  };
}

interface LoadCurrencyDataSuccessAction {
  type: 'LOAD_CURRENCY_DATA_SUCCESS';
  payload: {
    data: any;
  };
}

interface LoadCurrencyDataErrorAction {
  type: 'LOAD_CURRENCY_DATA_ERROR';
  error: any;
}

export type Action = LoadCurrencyDataAction | LoadCurrencyDataSuccessAction | LoadCurrencyDataErrorAction;