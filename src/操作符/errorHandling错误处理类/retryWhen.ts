/*
retry an observable sequence on error based on custom criteria.
*/
import { interval, timer } from "rxjs";
import { map, retryWhen, tap, delayWhen } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  map(val => {
    if (val > 5) {
      throw val;
    }
    return val;
  }),
  retryWhen(errors => {
    return errors.pipe(
      tap(val => console.log(`value ${val} was too high`)),
      delayWhen(val => timer(val * 1000))
    )
  })
);

example.subscribe(console.log);