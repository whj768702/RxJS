/*
需要对Observable的个数进行跟踪，当Observable数量大于1时订阅上游，
当Observable数量减少为0时退订上游。这正是refCount函数的作用。
*/
import { interval } from "rxjs";
import { take, multicast, refCount } from "rxjs/operators";
import { Subject } from "rxjs";

const coldeSource = interval(1000).pipe(take(3));
const tick = coldeSource.pipe(multicast(() => new Subject()), refCount());

setTimeout(() => {
  tick.subscribe(val => console.log(`observer 1: ${val}`));
}, 500);
setTimeout(() => {
  tick.subscribe(val => console.log(`observer 2: ${val}`));
}, 2000);