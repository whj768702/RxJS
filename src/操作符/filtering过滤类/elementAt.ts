/*
把上游数据当数组，只获取指定下标的那个数据，第二个参数可以指定没有对应下标
数据时的默认值。
*/
import { elementAt } from 'rxjs/operators';
import { of } from "rxjs";

const example = of(1, 2, 3);
const resultWithoutDefault = example.pipe(elementAt(2));
const resultWithDefault = example.pipe(elementAt(5, 10));

resultWithoutDefault.subscribe(console.log);
resultWithDefault.subscribe(console.log);