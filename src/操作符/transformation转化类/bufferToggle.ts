/*
toggle on to catch emitted values from source, toggle off to emit buffered values as array.
windowToggle<T, O>(openings: Observable<O>, closingSelector: (openValue: O) => Observable<any>): OperatorFunction<T, Observable<T>>
*/
import { interval } from "rxjs";
import { bufferToggle } from "rxjs/operators";

const sourceInterval = interval(1000);
const startInterval = interval(5000);
const closingInterval = val => {
  console.log(`value ${val} emitted, starting buffer! closing in 3s!`);
  return interval(3000);
}
const bufferToggleInterval = sourceInterval.pipe(
  bufferToggle(startInterval, closingInterval)
);

const subscribe = bufferToggleInterval.subscribe(val => console.log(val));