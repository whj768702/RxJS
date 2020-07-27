import { interval, Subject, ConnectableObservable } from "rxjs";
import { take, multicast } from "rxjs/operators";

const coldSource = interval(1000).pipe(take(3));
const tick = coldSource.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

tick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  tick.subscribe(val => console.log(`observer 2: ${val}`));
}, 1500);
tick.connect();