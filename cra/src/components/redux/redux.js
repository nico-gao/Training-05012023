import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getInitCounterAPI from "../../API/getInitCounterAPI";

/* 
  view(component) => action => reducer => store


  reducer: 
    pure function: no side effect, no external dependency, output(return) only depends on the input(arguments), predictable
    function, args: state, action, return new state
*/

const INCREMENT = {
    type: "INCREMENT",
};

const initialState = {
    counter: 0,
};

// const foo = (a = 0) => {
//   /* if(a === undefined) a = 0 */
//   return a + 1
// }

// console.log(foo(1));//2
// console.log(foo());//1

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 };//immutable
        case "UPDATE":
            return { counter: action.payload };
        default:
            return state;
    }
};

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
//action creator
export const getInitCounter = () => async (dispatch, getState) => {
    const initCounter = await getInitCounterAPI();
    console.log("thunk", initCounter);
    dispatch({ type: "UPDATE", payload: initCounter });
};

export const increment = () => INCREMENT;

export const store = createStore(reducer, applyMiddleware(thunk));
