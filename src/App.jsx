import React from "react";
import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import { reducer as formReducer } from "redux-form";
import Form from "./Components/Form";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

// const rootReducer = combineReducers({
//   form: formReducer, // Add Redux Form reducer
// });

// const store = createStore(rootReducer);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Form />
      </Provider>
    </div>
  );
};

export default App;
