/*
concatAll和concat作用类似，只不过concatAll只有一上游Observable对象，
这个Observable对象预期是一个高阶Observable对象，concatAll会对其中的
内部Observable对象做concat的操作。
*/
import { map, concatAll, take } from 'rxjs/operators';
import { interval, of } from "rxjs";

const souce = interval(2000);
const example = souce.pipe(
  map(value => of(value + 10)),
  concatAll()
);

// const subscribe = example.subscribe(value => console.log(value));

//example tow
const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));

const source2 = of(obs1, obs2, obs3);
const example2 = source2.pipe(concatAll());
const subscribe2 = example2.subscribe(val => console.log(val));
/* output: 0,1,2,3,4,0,1,0
    how i works:Subscribes to each inner observable and emit values,
    when complete subscribe to next.
    obs1: 0,1,2,3,4(complete)
    obs2: 0,1(complete)
    obs3: 0(complete)
*/
