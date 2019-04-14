import { interval } from "rxjs";
import { take, share } from "rxjs/operators";

const tick = interval(1000).pipe(take(3));
const sharedTick = tick.pipe(share());

sharedTick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  sharedTick.subscribe(val => console.log(`observer 2: ${val}`));
}, 5000);

/*
相当于：
function shareSubjectFactory() {
  return new Suject();
}
function share() {
  return multicast.call(this, shareSubjectFactory).refCount();
}
*/