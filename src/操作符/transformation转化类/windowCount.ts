import { interval } from "rxjs";
import { windowCount, tap, mergeAll } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  windowCount(4),
  tap(() => console.log('new window'))
);

example.pipe(mergeAll()).subscribe(console.log);