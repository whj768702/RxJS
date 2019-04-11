/*
applies an accumulator function over the source Observable, and returns each
intermediate result, with an optional seed value.
*/
import { of } from "rxjs";
import { scan } from "rxjs/operators";

const source = of(1, 2, 3);
const example = source.pipe(scan((acc, curr) => acc + curr, 0));

example.subscribe(val => console.log(val));