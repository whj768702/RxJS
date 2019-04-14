import { interval, Subject } from "rxjs";
import { take, multicast } from "rxjs/operators";

const coldeSource = interval(1000).pipe(take(3));
const tick = coldeSource.pipe(multicast(() => new Subject()));

tick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  tick.subscribe(val => console.log(`observer 2: ${val}`));
}, 1500);
tick.connect();