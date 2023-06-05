import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { increment } from "../redux/redux";
import useMySelector from "../redux/hooks/useMySelector";
import useMyDispatch from "../redux/hooks/useMyDispatch";

const FunctionalCounter = () => {
    const counter = useMySelector(state=>state.counter);
    const dispatch = useMyDispatch();
    const handleClick = () => {
      dispatch(increment)
    }
    return (
        <>
            <p>{counter}</p>
            <button onClick={handleClick}>increment counter</button>
        </>
    );
};

export default FunctionalCounter;
