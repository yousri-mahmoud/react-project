import React from "react";
import { useState } from "react";
import "./counter.css";
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter__wrapper">
      <h2>COUNTER</h2>
      <div className="flex">
        <button
          className={`dec ${counter ? "" : "disabel"}`}
          onClick={() => setCounter(counter - 1)}
        >
          {" "}
          dec
        </button>
        <div className="counter">{counter}</div>
        <button className="inc" onClick={() => setCounter(counter + 1)}>
          {" "}
          inc
        </button>
      </div>
    </div>
  );
}

export default Counter;
