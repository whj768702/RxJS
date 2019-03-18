/*
Joins last values emitted by passed Observables.
接受多个Observable对象作为参数，forkJoin产生的
Observable对象只产生一个数据，是所有参数Observable
对象的最后一个数据。
*/
import { forkJoin, of } from "rxjs";

const observable = forkJoin(
  of(1, 2, 3, 4),
  of(5, 6, 7)
);
observable.subscribe(
  value => console.log(value),
  err => {},
  () => console.log('complete')
);
// [4, 7]
// complete