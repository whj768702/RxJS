/*
和throttleTime类似。区别在于：throttleTime取时间段内第一个数据，
auditTime取时间段内的最后一个数据。
*/
import { interval } from "rxjs";
import { auditTime } from "rxjs/operators";

const example = interval(1000);
const result = example.pipe(auditTime(2000));

result.subscribe(console.log);