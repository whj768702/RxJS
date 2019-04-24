import React, { useState } from 'react';
import { Subject } from 'rxjs';
import { scan } from "rxjs/operators";

function Counter () {
  let [count, setCount] = useState(0);

  const counter = new Subject();
  const observer = value => setCount(count = value);
  counter.pipe(scan((result, inc) => result + inc, count)).subscribe(observer);
  return (
    <CounterView
      count={count}
      onIncrement={() => counter.next(1)}
      onDecrement={() => counter.next(-1)}
    />
  );
}
const CounterView = ({ count, onIncrement, onDecrement }) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
export default Counter;