/*
combineLatest合并数据流的方式是当任何一个上游Observable产生数据时，
从所有输入Observable对象中拿最后一次产生的数据(最新数据)，然后把这
些数据组合起来传给下游。 
ps:combineLatest可能会反复使用上游产生的最新数据，只要上游不产生新
的数据，那combineLatest就会反复使用这个上游最后一次产生的数据。
所有的上游Observable都完结后，combineLatest才会给下游一个complete.
*/
import { timer, combineLatest } from "rxjs";

const firstTimer = timer(0, 1000);
const secondeTimer = timer(500, 1000);
const combinedTimers = combineLatest(firstTimer, secondeTimer);

combinedTimers.subscribe(value => console.log(value));

// 定制数据
const project = (a: number, b: number) => `${a} and ${b}`;
const combinedTimersWithFormat = combineLatest(firstTimer, secondeTimer, project);
combinedTimersWithFormat.subscribe(value => console.log(value));
