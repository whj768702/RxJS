/*
observable of values for window of time.
*/
import { timer, interval } from "rxjs";
import { window, scan } from "rxjs/operators";

const source = timer(0, 1000);
const example = source.pipe(window(timer(0, 4000)));
example.subscribe(console.log);