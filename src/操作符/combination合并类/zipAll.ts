import { interval } from "rxjs";
import { take, map, zipAll } from "rxjs/operators";

const ho$ = interval(1000).pipe(
  take(2),
  map(x => interval(1500).pipe(map(y => x + ':' + y), take(2)))
);
const concated$ = ho$.pipe(zipAll());
concated$.subscribe(console.log);