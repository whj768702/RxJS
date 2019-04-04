/*
忽略上游所有数据，只关心complete和error事件。
*/
import { interval } from "rxjs";
import { take, ignoreElements } from "rxjs/operators";

const example = interval(1000).pipe(take(5));
const result = example.pipe(ignoreElements());

result.subscribe(
  console.log,
  null,
  () => console.log('complete')
);