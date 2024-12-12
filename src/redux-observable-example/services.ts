import {from, switchMap} from "rxjs";
import {fromFetch} from "rxjs/internal/observable/dom/fetch";

export const fetchCurrencyData = (table: string) => {
  return fromFetch(`https://api.nbp.pl/api/exchangerates/tables/${table}/`).pipe(
    switchMap(response => {
      if (response.ok) {
        return from(response.json());
      } else {
        return from(Promise.reject(response));
      }
    })
  );
}