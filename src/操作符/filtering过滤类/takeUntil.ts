/*
其参数notifier是Observable，通过这个Observable来控制什么时候结束从
上游Observable中拿数据。
如果上游提前抛出错误，takeUntil会将该错误抛给下游。
*/
import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

const source = interval(1000);
const notifier = timer(3500);
const take = source.pipe(takeUntil(notifier));
take.subscribe(console.log);