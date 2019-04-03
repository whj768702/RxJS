/*
取出节流时间窗口中最后一个产生的数据，如果节流时间窗口范围内上游就完结了，那么
audit也就不传递数据了，直接把完结的信号传给下游。
*/
import { interval, concat, timer } from "rxjs";
import { take, mapTo, audit } from "rxjs/operators";
const sourceA = interval(500).pipe(take(2), mapTo('A'));
const sourceB = interval(1000).pipe(take(3), mapTo('B'));
const sourceC = interval(500).pipe(take(3), mapTo('C'));
const example = concat(sourceA, sourceB, sourceC);
const result = example.pipe(audit(value => timer(800)));

result.subscribe(console.log);