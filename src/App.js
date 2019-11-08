import React, { Component } from "react";
import "./App.scss";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const Form = React.lazy(() => import("./components/Form/Form"));
const AgGrid = React.lazy(() => import("./components/AgGrid/AgGrid"));
const Counter = React.lazy(() => import("./components/Counter/Counter"));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Suspense fallback="loading...">
          <Counter />
          <Form />
          <AgGrid />
        </React.Suspense>
      </Provider>
    );
  }
}

export default App;
