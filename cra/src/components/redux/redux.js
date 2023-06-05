import {createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


/* 
  view(component) => action => reducer => store


  reducer: 
    pure function: no side effect, no external dependency, output(return) only depends on the input(arguments), predictable
    function, args: state, action, return new state
*/

export const increment = {
  type:"INCREMENT"
}

const initialState = {
  counter: 0
}

// const foo = (a = 0) => {
//   /* if(a === undefined) a = 0 */
//   return a + 1
// }

// console.log(foo(1));//2 
// console.log(foo());//1


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {counter: state.counter + 1}
    default:
      return state;
  }
}

/* const myCreateStore = function(reducerFn){
  let state = reducerFn(undefined,{type:undefined});
  let cbArr = [];
  const dispatch = (action) => {
    state = reducerFn(state, action); 
    cbArr.forEach(cb=>cb());
  }
  const getState = () => {
    return state
  }
  const subscribe = (cb) => {
    cbArr.push(cb);
  }
  return {
    dispatch,
    getState,
    subscribe
  }
} */


export const store = createStore(reducer, composeWithDevTools())






