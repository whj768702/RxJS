import CounterView from './CounterView.js';
import { BehaviorSubject } from 'rxjs';
import { scan, map } from 'rxjs/operators';
import observe from './hoc.js';

const hocCounter = new observe(
  CounterView,
  () => {
    const counter = new BehaviorSubject(0);

    return counter.pipe(scan((result, inc) => result + inc, 0), map(value => ({
      count: value,
      onIncrement: () => counter.next(1),
      onDecrement: () => counter.next(-1)
    })));
  },
  0
);
export default hocCounter;