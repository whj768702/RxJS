/*
projects each soruce value to an Observable which is merged in the output Observable.
mergeMap对于每个内部Observable对象直接合并，也就是任何内部Observable对象中的数据，
来一个就传一个给下游，不做任何等待。
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
const mergeMapExample = source.pipe(
  mergeMap(val => of(`delayed by: ${val}ms`).pipe(delay(val)))
).subscribe(val => console.log(`with mergeMap: ${val}`));