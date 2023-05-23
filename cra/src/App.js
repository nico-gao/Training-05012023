import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "my counter app title",
      counter: 0,
      message: "hi",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   // console.log(this);
  //   this.setState({
  //     ...this.state,
  //     counter: this.state.counter + 1,
  //   });
  //   console.log(this.state.counter);
  //   this.setState({
  //     ...this.state,
  //     counter: this.state.counter + 1,
  //   });
  //   console.log(this.state.counter);
  // };

  // handleClick = () => {
  //   // console.log(this);
  //   this.setState(
  //     (prevState) => {
  //       return {
  //         ...prevState,
  //         counter: prevState.counter + 1,
  //       };
  //     },
  //     () => {
  //       console.log("1st setState");
  //     }
  //   );

  //   this.setState(
  //     (prevState) => {
  //       return {
  //         ...prevState,
  //         counter: prevState.counter + 1,
  //       };
  //     },
  //     () => {
  //       console.log("2nd setState");
  //     }
  //   );
  // };

  handleChange = (msg) => {
    this.setState({
      ...this.state,
      message: msg,
    });
  };

  render() {
    return (
      <>
        <Header handleChange={this.handleChange} title={this.state.title} />
        <Counter />
        <p>{this.state.message}</p>
      </>
    );
  }
}

export default App;
