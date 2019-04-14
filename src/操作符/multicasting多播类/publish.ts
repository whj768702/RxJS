import { interval } from "rxjs";
import { take, publish, refCount } from "rxjs/operators";

const tick = interval(1000).pipe(take(3));
const sharedTick = tick.pipe(publish(), refCount());

sharedTick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  sharedTick.subscribe(val => console.log(`observer 2: ${val}`));
}, 5000);