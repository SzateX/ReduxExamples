import { store } from "./store";

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({type: "TURN_ON"});

store.dispatch({type: "TURN_OFF"});

store.dispatch({type: "TURN_ON"});

store.dispatch({type: "TURN_OFF"});