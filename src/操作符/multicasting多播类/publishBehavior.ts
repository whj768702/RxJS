/*
使用BehaviorSubject对象作为“中间人”。
BehaviorSubject的行为快去吃可以提供一个“默认数据”，当添加Observer的时候，即使上游还没有吐出数据，
Observer也会立即获得这个“默认数据”，而且这个“默认数据”总是会被上游吐出的最新数据替代，也就是说，
任何新添加的Observer都有一个数据等着它，要么是指定的“默认数据”，要么就是上游吐出的最新数据。
实现方式：https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishBehavior.ts
*/
import { interval } from "rxjs";
import { take, publishBehavior, refCount } from "rxjs/operators";

const tick = interval(1000).pipe(take(3));
const sharedTick = tick.pipe(publishBehavior(-1), refCount());

sharedTick.subscribe(val => console.log(`observer 1: ${val}`));
setTimeout(() => {
  sharedTick.subscribe(val => console.log(`observer 2: ${val}`));
}, 2500);
setTimeout(() => {
  sharedTick.subscribe(val => console.log(`observer 3: ${val}`));
}, 5000);