/*
只返回从没出现过的数据。上游同样的数据只有第一次产生时会传给下游，其余的都舍弃掉了。
*/
import { of } from "rxjs";
import { distinct } from "rxjs/operators";

const example = of(1, 1, 2, 2, 2, 3);
const result = example.pipe(distinct());

result.subscribe(console.log);

// 带参数的例子
interface Person {
  age: number,
  name: string
}
of<Person>(
  {age: 4, name: 'foo'},
  {age: 5, name: 'bar'},
  {age: 6, name: 'foo'},
).pipe(
  distinct((p) => p.name)
).subscribe(console.log);