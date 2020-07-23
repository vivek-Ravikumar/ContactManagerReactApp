import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HomePage from "./Pages/homePage";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}
