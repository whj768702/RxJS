/*
close window at provided time frame emitting observable of 
collected values from source.
*/
import { timer, interval } from "rxjs";
import { windowWhen, tap, mergeAll } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(
  windowWhen(() => interval(5000)),
  tap(() => console.log('new window'))
);

// example.pipe(mergeAll()).subscribe(console.log);
example.subscribe(val => val.subscribe(console.log));