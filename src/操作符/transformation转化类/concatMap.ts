/*
map values to inner observable,subscribe and emit in order.
concatMap不会订阅下一个数据直到前一个完成。
*/
import { of } from "rxjs";
import { concatMap, delay, mergeMap } from "rxjs/operators";

const source = of(2000, 5000);
const example = source.pipe(
  concatMap(val => of(`delayed by: ${val}ms`).pipe(delay(val)))
);
const subscribe = example.subscribe(val => {
  console.log(`with concatMap: ${val}`)
});