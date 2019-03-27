/*
吐出满足条件的数据，碰到不满足条件的数据了，takeWhile产生的Observable就完结。
*/
import { range } from "rxjs";
import { takeWhile } from "rxjs/operators";

const many = range(1, 100);
const takeData = many.pipe(takeWhile(value => value<10));
takeData.subscribe(console.log);