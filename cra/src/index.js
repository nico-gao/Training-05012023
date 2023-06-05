import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux'
import {
  HooksApp,
  HooksApp2,
  WrappedComponent,
  // WrappedHooksComponent,
} from "./components/HooksApp/HooksApp";
import Counter from "./components/Counter/Counter"
import { store } from "./components/redux/redux";
import FunctionalCounter from "./components/Counter/FunctionalCounter";
import MyProvider from "./components/redux/MyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const test = (
  <MyProvider store={store}>
    <FunctionalCounter/>
  </MyProvider>
);
root.render(test);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
