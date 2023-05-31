import React from "react";
import Car from "./Car";
import SellButton from "./SellButton";

/**
 * uuid: universal unique id
 * pureComponent/shouldComponentUpdate   hoc:React.memo
 *
 * loose comparison: ==
 * strict comparison: ===
 * shallow comparison: compare the first level of the key value pairs
 * deep comparison: compare everything recursively
 *
 * shallow copy: it will copy the properties to the object that share the same references with the original object
 * deep copy: it will recursively create new references for all the nested objects
 */

// const obj = { a: 1, b: 2, c: { d: 4 } };
// const obj2 = { ...obj }; // -> shallow copy
// obj.c === obj2.c; // false -> deep copy

class CarsApp extends React.Component {
  state = {
    cars: [
      {
        make: "Toyota",
        quantity: 10,
        id: 1,
        // date: new Date(),
      },
      {
        make: "Honda",
        quantity: 7,
        id: 2,
      },
      {
        make: "Nissan",
        quantity: 5,
        id: 3,
      },
    ],
    totalQuantity: 22,
  };

  handleSell = (index) => {
    console.log(index);

    this.setState((prev) => {
      // mutable
      // const nextState = { ...prev };
      // console.log(nextState.cars === prev.cars); // true
      // nextState.cars[index].quantity = nextState.cars[index].quantity - 1;

      // immutable
      // const nextState = JSON.parse(JSON.stringify(prev));
      // // console.log(nextState.cars === prev.cars); // false
      // console.log(prev, nextState);
      // nextState.cars[index].quantity = nextState.cars[index].quantity - 1;

      const nextState = {
        ...prev,
        cars: [
          ...prev.cars.slice(0, index),
          { ...prev.cars[index], quantity: prev.cars[index].quantity - 1 },
          ...prev.cars.slice(index + 1),
        ],
      };
      console.log(nextState.cars === prev.cars); // false

      return nextState;
    });
  };

  render() {
    return (
      <>
        <div>
          {this.state.cars.map((car) => (
            <Car carData={car} key={car.id} />
          ))}
        </div>
        <div>
          {this.state.cars.map((car, index) => (
            <SellButton
              key={car.id}
              index={index}
              handleSell={this.handleSell}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CarsApp;
