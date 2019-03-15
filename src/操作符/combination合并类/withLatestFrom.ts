/*
调用withLatestFrom的那个Observable对象起到主导数据产生节奏的作用，
作为参数的Observable对象只能贡献数据，不能控制产生数据的时机。
*/
import { interval } from "rxjs";
import { withLatestFrom, map } from "rxjs/operators";

// emit every 5s
const source = interval(5000);
//emit every 1s
const secondSource = interval(1000);

const example = source.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `first source(5s): ${first} second source(1s): ${second}`;
  })
);
example.subscribe(val => console.log(val));