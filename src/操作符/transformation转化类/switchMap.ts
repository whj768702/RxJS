/*
特殊点：后产生的内部Observable对象优先级总是更高，只要有新的内部Observable
对象产生，就立刻退订之前的内部Observable对象，改为从最新的内部Observable对
象拿数据。
timer 5s产生一个对象。内部interval0.5s产生一个。
*/
import { timer, interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const source = timer(0, 5000);
source.subscribe(val => console.log(`time: ${val}`));
const example = source.pipe(switchMap(() => interval(500)));
const subscribe = example.subscribe(console.log);