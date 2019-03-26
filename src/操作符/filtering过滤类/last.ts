/*
和first效果相反。吐出最后一个满足条件的数据，没有吐出error.
*/
import { of } from "rxjs";
import { last } from "rxjs/operators";

const source = of(3, 1, 4, 1, 5, 9, 2, 6);
source.pipe(last()).subscribe(console.log);
source.pipe(last(x => x%2 === 1)).subscribe(console.log);