import React, { memo } from "react";

class Car extends React.Component {
  componentDidUpdate() {
    console.log(this.props.carData.make, "updated");
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
    const { make, quantity } = this.props.carData;
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
}

export default Car;
// export default memo(Car);
