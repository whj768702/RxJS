/*
递归调用。
Recursively call provided function.
例子通过expand产生2的N次方序列。
*/
import { of } from "rxjs";
import { expand, delay } from "rxjs/operators";

const source = of(1);
const example = source.pipe(expand((value, index) => of(value * 2).pipe(delay(1000))));
example.subscribe(console.log);