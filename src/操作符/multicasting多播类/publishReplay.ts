/*
回放上游数据。
实现方式：https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishReplay.ts
*/
import { interval } from "rxjs";
import { take, publishReplay, refCount, tap } from "rxjs/operators";

const tick = interval(1000).pipe(
  take(3),
  tap(x => console.log(`source: ${x}`))
);
const sharedTick = tick.pipe(publishReplay(), refCount());

sharedTick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  sharedTick.subscribe(val => console.log(`observer 2: ${val}`));
}, 5000);