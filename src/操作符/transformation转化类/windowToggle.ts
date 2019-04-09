/*
collect and emit observable of values from source between opening and closing emission.
windowToggle<T, O>(openings: Observable<O>, closingSelector: (openValue: O) => Observable<any>): OperatorFunction<T, Observable<T>>
每当openings产生一个数据，代表一个缓冲窗口的开始，同时，closingSelector也会被调用，用来
获得缓冲窗口结束的通知。
*/
import { timer, interval } from "rxjs";
import { windowToggle, tap, mergeAll } from "rxjs/operators";

const source = timer(0, 1000);
const toggle = interval(5000);
const example = source.pipe(
  windowToggle(toggle, val => interval(val * 1000)),
  tap(_ => console.log('new window'))
);

const subscribeTwo = example.pipe(
  mergeAll()
).subscribe(val => console.log(val));