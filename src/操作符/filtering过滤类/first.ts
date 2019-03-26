/*
吐出第一个满足条件的数据。判定函数可有可无。
如果没有满足条件的数据，则返回error.
*/
import { of } from "rxjs";
import { first } from "rxjs/operators";

const source$ = of(3, 1, 4, 1, 5, 9);
const first$ = source$.pipe(first());
const first2$ = source$.pipe(first(x => x%2 === 0));
first$.subscribe(console.log);
first2$.subscribe(console.log);