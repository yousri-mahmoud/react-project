import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "../Redux/actions";
// import { useState } from "react";

import "./counter.css";
function Counter() {
  // const [counter, setCounter] = useState(0);
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="counter__wrapper">
      <h2>COUNTER</h2>
      <div className="flex">
        <button
          className={`dec ${counter ? "" : "disabel"}`}
          onClick={() => dispatch({ type: DECREMENT })}
        >
          {" "}
          dec
        </button>
        <div className="counter">{counter}</div>
        <button className="inc" onClick={() => dispatch({ type: INCREMENT })}>
          {" "}
          inc
        </button>
      </div>
    </div>
  );
}

export default Counter;
