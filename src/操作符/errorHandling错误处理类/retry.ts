/*
retry an observable sequence a specific number of times should an error occur.
*/
import { mergeMap, retry } from 'rxjs/operators';
import { interval, throwError, of } from "rxjs";

const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    if (val > 5) {
      return throwError('error');
    }
    return of(val);
  }),
  retry(2)
);
example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: retried 2 times then quit`)
});