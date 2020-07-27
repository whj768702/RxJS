import React, { useState } from 'react';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import CounterView from './CounterView.js';

function Counter() {
  let [count, setCount] = useState(0);

  const counter = new Subject();
  const observer = (value) => setCount((count = value));
  counter.pipe(scan((result, inc) => result + inc, count)).subscribe(observer);
  return (
    <CounterView
      count={count}
      onIncrement={() => counter.next(1)}
      onDecrement={() => counter.next(-1)}
    />
  );
}

export default Counter;
