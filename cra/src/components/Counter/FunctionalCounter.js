import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useMySelector from "../redux/hooks/useMySelector";
import useMyDispatch from "../redux/hooks/useMyDispatch";
import { getInitCounter, increment } from "../redux/slices/counterSlice";

const FunctionalCounter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const isLoading = useSelector((state) => state.counter.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInitCounter());
    }, []);

    const handleClick = () => {
        dispatch(increment());
    };
    return (
        <>
            <p>{isLoading ? "..." : counter}</p>
            <button onClick={handleClick}>increment counter</button>
        </>
    );
};

export default FunctionalCounter;
