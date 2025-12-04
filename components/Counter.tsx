"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Counter
      <h1>{count}</h1>
      <button onClick={dec}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={inc}>+</button>
    </div>
  );
};
export default Counter;
