/*
publishLast多播的是上游的最后一个数据。
实现方式：https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishLast.ts
function publishLast<T>():UnaryFunction<Observable<T>, ConnectableObservable<T>> {
  return (source: Observable<T>) => multicast(new AsyncSubject<T>())(source);
}
*/
import { interval } from "rxjs";
import { tap, take, publishLast } from "rxjs/operators";

const connectable = interval(1000).pipe(
  tap(x => console.log(`side effect: ${x}`)),
  take(3),
  publishLast()
);

connectable.subscribe(
  x => console.log(`sub A: ${x}`),
  err => console.log(`sub A error: ${err}`),
  () => console.log('sub A complete')
);

connectable.subscribe(
  x => console.log(`sub B: ${x}`),
  err => console.log(`sub B error: ${err}`),
  () => console.log('sub B complete')
);

connectable.connect();