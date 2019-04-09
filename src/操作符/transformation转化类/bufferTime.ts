/*
collect emitted values until provided time has passed, emit as array.
bufferTime产生的是普通的Observable对象，其中的数据是数组形式，它会把时间
区块内的数据缓存，在时间区块结束的时候把所有缓存测数据放在一个数组里面传给
下游。
*/
import { interval } from "rxjs";
import { bufferTime } from "rxjs/operators";

const source = interval(500);
const example = source.pipe(bufferTime(2000));

example.subscribe(val => {
  console.log('buffered with time: ', val);
});