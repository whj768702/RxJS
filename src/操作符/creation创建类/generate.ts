/*
不限于数值序列的数据流，如下字符串
generate(初始值，终止条件，迭代条件，返回值)
*/
import { generate } from "rxjs";

const source$ = generate(1, value => value < 10, value => value+=2, value => value);
source$.subscribe(console.log);// 1 3 5 7 9

const source2$ = generate('X', value => value.length <= 3, value => value + 'X', value => value);
source2$.subscribe(console.log); // X XX XXX