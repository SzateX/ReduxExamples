import { store } from "./store";

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({type: "LOAD_CURRENCY_DATA"});

store.dispatch({type: "LOAD_CURRENCY_DATA_SUCCESS", payload: {data: "some data"}});

store.dispatch({type: "LOAD_CURRENCY_DATA"});

store.dispatch({type: "LOAD_CURRENCY_DATA_ERROR", error: "some error"});

