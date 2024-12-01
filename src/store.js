import { combineReducers, createStore } from "redux";
import { reducer as Formreducer } from "redux-form";

const rootReducer = combineReducers({
  devTools: false,
  form: Formreducer,
});
const store = createStore(
  rootReducer,
  // Enable Redux DevTools Extension if it's available in the browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
