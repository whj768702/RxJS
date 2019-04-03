/*
产生的数据与上游上一个数据相同，就丢弃。与上游上一个数据不同，保留。
*/
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

of(1, 1, 2, 3, 3, 2, 2, 2, 4).pipe(distinctUntilChanged()).subscribe(console.log);

interface Person {
  age: number,
  name: string
}

of(
  {age: 4, name: 'foo'},
  {age: 5, name: 'bar'},
  {age: 6, name: 'foo'},
  {age: 7, name: 'foo'},
).pipe(distinctUntilChanged((p, q) => p.name === q.name)).subscribe(console.log);