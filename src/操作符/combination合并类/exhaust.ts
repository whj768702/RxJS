import { interval } from "rxjs";
import { take, map, exhaust } from "rxjs/operators";

const ho$ = interval(1000).pipe(
    take(3),
    map(x => interval(7000).pipe(
      map(y => x + ':' + y),
      take(2)
    ))
  );
const result$ = ho$.pipe(exhaust());
result$.subscribe(console.log);