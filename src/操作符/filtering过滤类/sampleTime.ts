/*
sampleTime会记录每一个时间块上游推下来的最后一个数据，
到了每个时间块结尾，就把这个时间块上游的最后一个数据推给下游。
和auditTime的区别：auditTime时间块的开始是由上游产生数据触发的；
而sampleTime的时间块开始则和上游数据完全无关。
*/
import { interval, concat } from "rxjs";
import { take, mapTo, sampleTime } from "rxjs/operators";

const sourceA = interval(500).pipe(take(2), mapTo('A'));
const sourceB = interval(1000).pipe(take(3), mapTo('B'));
const sourceC = interval(500).pipe(take(3), mapTo('C'));
const result = concat(sourceA, sourceB, sourceC).pipe(sampleTime(800));

result.subscribe(console.log);