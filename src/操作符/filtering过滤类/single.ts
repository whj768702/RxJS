/*
检查上游是否只有一个满足对应条件的数据。
*/
import { interval } from "rxjs";
import { take, single } from "rxjs/operators";

const example = interval(1000).pipe(take(2));
const result = example.pipe(single(val => val%2 === 0));

result.subscribe(console.log);

// 存在多个满足条件的数据时，返回异常

const example2 = interval(1000).pipe(take(3));
const result2 = example2.pipe(single(val => val%2 === 0));

result2.subscribe({
  next: console.log,
  error: (err) => console.log(err),
  complete: () => console.log('complete')
});