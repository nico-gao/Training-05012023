// React - help us to generate the virtual DOM
// ReactDOM - help us to render/update the DOM

import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home/Home";

// console.log(React);
// console.log(ReactDOM);

class App extends React.Component {
  render() {
    // return <h1>Hello</h1>;
    return <Home />;
    // return React.createElement("h1", null, "Hello ", this.props.name);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(React.createElement(App, { name: "nicole" }));

// function foo() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
