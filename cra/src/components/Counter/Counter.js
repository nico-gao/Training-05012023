import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  // state = {
  //   counter: 0,
  // };

  handleClick = () => {
    // console.log(this);
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          counter: prevState.counter + 1,
        };
      },
      () => {
        console.log("1st setState");
      }
    );
  };
  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>increment counter</button>
      </>
    );
  }
}

export default Counter;
