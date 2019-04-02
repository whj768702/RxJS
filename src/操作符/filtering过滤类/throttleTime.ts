/*
限制在duration时间范围内，从上游传递给下游数据的个数。
简单理解：duration时间内，来多个数据，只取一个。
*/
import { interval } from "rxjs";
import { throttleTime } from "rxjs/operators";

const source = interval(1000);
const result = source.pipe(throttleTime(2000));
result.subscribe(console.log);
// 每2000ms传递给下游一个数据，输出0 2 4 ……