import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementByFiveHandler = () => {
    dispatch({ type: 'incrementby5' });
  };
  const decrementByFiveHandler = () => {
    dispatch({ type: 'decrementby5' });
  };
  const toggleCounterHandler = () => {};
  return (
    <div>
      <h1>Redux cunter</h1>
      <h1>{counter}</h1>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementByFiveHandler}>increment by 5</button>
        <button onClick={decrementByFiveHandler}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle counter</button>
    </div>
  );
};

export default Counter;
