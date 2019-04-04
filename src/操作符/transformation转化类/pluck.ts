/*
上游数据中特定的字段值取出来。
可以包含多个参数，用于访问嵌套属性。
*/
import { of } from "rxjs";
import { pluck } from "rxjs/operators";

const example = of(
  {name: 'foo', age: 4},
  {name: 'black', age: 5},
  {name: 'orange', age: 6},
  {name: 'bar', age: 7}
);
const result = example.pipe(pluck('age'));

result.subscribe(console.log);