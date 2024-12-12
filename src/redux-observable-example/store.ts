import {reducer, State} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import {createEpicMiddleware} from "redux-observable";
import {Action} from "./actions";
import {rootEpic} from "./epics";

const epicMiddleware = createEpicMiddleware<Action, Action, State>();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
})

epicMiddleware.run(rootEpic);