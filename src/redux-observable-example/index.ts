import { store } from "./store";

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
})

store.dispatch({type: "LOAD_CURRENCY_DATA", payload: {tableType: "A"}});

