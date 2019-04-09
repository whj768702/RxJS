import { timer, interval } from "rxjs";
import { windowToggle, tap, mergeAll } from "rxjs/operators";

const source = timer(0, 1000);
const toggle = interval(5000);
const example = source.pipe(
  windowToggle(toggle, val => interval(val * 1000)),
  tap(_ => console.log('new window'))
);

const subscribeTwo = example.pipe(
  mergeAll()
).subscribe(val => console.log(val));