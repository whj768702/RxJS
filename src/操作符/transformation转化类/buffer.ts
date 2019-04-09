/*
collect output values until provided observable emits, emit as array.
*/
import { interval, timer } from "rxjs";
import { buffer } from "rxjs/operators";

const myInterval = interval(1000);
const bufferBy = timer(0, 2000);
const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
myBufferedInterval.subscribe(console.log);