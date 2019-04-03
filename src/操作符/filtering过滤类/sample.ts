import { interval, concat } from "rxjs";
import { take, mapTo, sample } from "rxjs/operators";

const sourceA = interval(500).pipe(take(2), mapTo('A'));
const sourceB = interval(1000).pipe(take(3), mapTo('B'));
const sourceC = interval(500).pipe(take(3), mapTo('C'));
const notifier = () => {
  return interval(800);
};
const result = concat(sourceA, sourceB, sourceC).pipe(sample(notifier()));

result.subscribe(console.log);