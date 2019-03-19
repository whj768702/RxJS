/*
统计上游Observable对象吐出符合条件的数据个数，无限制条件时是全部数据个数。
*/
import { range } from "rxjs";
import { count } from "rxjs/operators";

const numbers = range(1, 7);
const result = numbers.pipe(count(i => i%2===1));
result.subscribe(console.log);