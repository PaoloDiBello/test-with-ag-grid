import React, { Component } from "react";
import "./App.scss";
import AgGrid from "./components/AgGrid/AgGrid";
import Form from "./components/Form/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <AgGrid />
      </div>
    );
  }
}

export default App;
