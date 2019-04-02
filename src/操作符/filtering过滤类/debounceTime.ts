/*
等上游在dueTime范围内不产生任何其他数据时才把这个数据传递给下游；如果在
dueTime范围内上游产生了新的数据，那么debounceTime又要重新开始计时。
*/
import { interval } from "rxjs";
import { filter, debounceTime } from "rxjs/operators";

const source = interval(2000);
const filterEven = source.pipe(filter(x => x%2 === 1));
const result = filterEven.pipe(debounceTime(2000));
result.subscribe(console.log);