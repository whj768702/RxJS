/*
reduce<T, R>(accumulator:(acc: R, value: T, index?: number) => R, seed?: R)
reduce的功能就是对一个集合中所有元素依次调用这个规约函数，这个规约函数可以返回一个
“累积”结果，然后这个“累积”的结果会作为参数和数据集合的下一个元素一起成为规约函数下
次被调用的参数，如此遍历集合中所有的元素。
seed是规约过程中“累积”的初始值，如果不指定seed参数，默认数据集合中的第一个数据充当
初始值。
*/
import { range } from "rxjs";
import { reduce } from "rxjs/operators";

const source$ = range(1, 100);
const reduced$ = source$.pipe(reduce((acc, current) => acc + current, 0));
reduced$.subscribe(console.log);