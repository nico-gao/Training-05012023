import React from "react";

class SellButton extends React.Component {
  render() {
    const { index } = this.props;
    return <button onClick={() => this.props.handleSell(index)}>Sell</button>;
  }
}

export default SellButton;
