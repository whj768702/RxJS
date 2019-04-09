/*
按参数长度的区块，每个时间区块中，上游传下来的数据不会直接送给下游，而是
在该时间区块的开始就新创建一个Observable对象推送给下游，然后再这个时间
区块内上游产生的数据放到这个新创建的observable对象中。
*/
import { timer } from "rxjs";
import { windowTime, tap, mergeAll } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(
  windowTime(3000),
  tap(() => console.log('new window')));

example.pipe(mergeAll()).subscribe(console.log);