import React, { useContext } from "react";
import { CarsContext } from "../CarsContext";

/* class SellButton extends React.Component {
    render() {
        const { handleSell } = this.context;
        const { index } = this.props;
        return <button onClick={() => handleSell(index)}>Sell</button>;
    }
}

SellButton.contextType = CarsContext; */

const SellButton = ({index}) => {
  const {handleSell} = useContext(CarsContext);
  
  return (
    <button onClick={() => handleSell(index)}>Sell</button>
  )
}

export default SellButton;
