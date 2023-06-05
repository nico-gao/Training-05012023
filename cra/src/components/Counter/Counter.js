import React from "react";
import {increment, store} from "../redux/redux";
import { connect } from 'react-redux'

//parent, state, props, forceUpdate
class Counter extends React.Component {
  constructor() {
    super();
  }


  // state = {
  //   counter: 0,
  // };

  handleClick = () => {
   this.props.increment()
  };
  render() {
    const {counter} = this.props
    return (
      <>
        <p>{counter}</p>
        <button onClick={this.handleClick}>increment counter</button>
      </>
    );
  }
}
/* 
  mapStateToProps,  read state from redux
  mapDispatchToProps
*/

const mapStateToProps = (state) => {
  const {counter} = state
  return {
    counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch(increment)}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
