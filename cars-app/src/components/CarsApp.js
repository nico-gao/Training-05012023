import React, { createContext } from "react";
import Car from "./Car";
import SellButton from "./SellButton";
import { CarsContext } from "../CarsContext";

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

/* 
  props drilling: pass state down to every nested level
  
  state lifting: lift the state in order to share it with some sibling component

  global state management

  context API(built-in):
    provider(store data, state, function)
    functional component: useContext
    class component: contextType, this.context

  redux:
    flux:
      multiple stores
      dispatcher
      store will contain the logic of updating state

    redux:
      single store
      reducer(pure function) will contain the logic of updating state
    
    redux core
    
    React-redux
    redux toolkit(RTK)


  third party library:
    redux
    mobx
    recoil.js

  

*/

/* 
        parent
  child1             child2
grandchild1        grandchild2  
grandgrandchild1

*/



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
    //deep copy: JSON.parse(JSON.stringify(obj))
    //deep comparison: JSON.stringify(obj1) === JSON.stringify(obj2)

    //higher order component
    //higher order function

    //pure component
    //pure function

    shouldComponentUpdate(nextProps, nextState) {
        console.log("scu", nextState.cars === this.state.cars);

        return true;
    }

    handleSell = (index) => {
        /* console.log(index);
        this.state.cars[index].quantity -= 1
        this.setState(this.state); */

        const newState = JSON.parse(JSON.stringify(this.state));
        newState.cars[index].quantity -= 1;
        this.setState(newState); //immutable

        /* this.setState((prev) => {
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
                    {
                        ...prev.cars[index],
                        quantity: prev.cars[index].quantity - 1,
                    },
                    ...prev.cars.slice(index + 1),
                ],
            };
            console.log(nextState.cars === prev.cars); // false

            return nextState;
        }); */
    };

    render() {
        return (
            <CarsContext.Provider
                value={{ state: this.state, handleSell: this.handleSell }}
            >
                <div>
                    {this.state.cars.map((car,index) => (
                        <Car index={index} key={car.id} />
                    ))}
                </div>
                <div>
                    {this.state.cars.map((car, index) => (
                        <SellButton
                            key={car.id}
                            index={index}
                        />
                    ))}
                </div>
            </CarsContext.Provider>
        );
    }
}

export default CarsApp;
