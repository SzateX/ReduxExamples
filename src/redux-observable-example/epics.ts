import {combineEpics, Epic, ofType} from "redux-observable";
import {Action, LoadCurrencyDataSuccessAction, LoadCurrencyDataErrorAction} from "./actions";
import {State} from "./reducer";
import {catchError, map, switchMap, of, Observable} from "rxjs";
import {fetchCurrencyData} from "./services";

const currencyEpic: Epic<Action, Action, State> = (action$) =>
  action$.pipe(
    ofType('LOAD_CURRENCY_DATA'),
    switchMap(({payload}) => {
      return fetchCurrencyData(payload.tableType).pipe(
        map((response): LoadCurrencyDataSuccessAction => ({
          type: 'LOAD_CURRENCY_DATA_SUCCESS',
          payload: {data: response}
        })),
        catchError((error): Observable<LoadCurrencyDataErrorAction> => of({
          type: 'LOAD_CURRENCY_DATA_ERROR',
          error
        }))
      );
    })
  );

export const rootEpic = combineEpics(currencyEpic);