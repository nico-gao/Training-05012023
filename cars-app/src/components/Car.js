import React, { memo, useContext } from "react";
import { CarsContext } from "../CarsContext";

/* class Car extends React.Component {
  static contextType = CarsContext;
    componentDidUpdate() {
        //console.log(this.props.carData.make, "updated");
    }

    // shouldComponentUpdate(nextProps) {
    //   const { make, quantity, id } = this.props.carData;
    //   const {
    //     make: nextMake,
    //     quantity: nextQuantity,
    //     id: nextId,
    //   } = nextProps.carData;

    //   // if (quantity === nextQuantity) {
    //   //   return false;
    //   // }

    //   if (this.props.carData === nextProps.carData) {
    //     return false;
    //   }
    //   return true;

    //   // return false;
    // }

    render() {
        const index = this.props.index;

        const { state } = this.context;
        console.log(" state", state.cars[index])

        const { make, quantity } = state.cars[index];

        return (
            <div
                style={{
                    border: "1px solid black",
                    width: "100px",
                    height: "100px",
                    margin: "20px",
                    display: "inline-block",
                }}
            >
                <p>{make}</p>
                <p>{quantity}</p>
            </div>
        );
    }

    
} */


const Car = ({index}) =>{
  const {state} = useContext(CarsContext)
  const {make, quantity} = state.cars[index]
  return (
    <div
                style={{
                    border: "1px solid black",
                    width: "100px",
                    height: "100px",
                    margin: "20px",
                    display: "inline-block",
                }}
            >
                <p>{make}</p>
                <p>{quantity}</p>
            </div>
  )
}

export default Car;
// export default memo(Car);
