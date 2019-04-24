import React from 'react';

const CounterView = ({ count, onIncrement, onDecrement }) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default CounterView;