/*
和takeWhile作用相反，跳过满足条件的数据。
*/
import { range } from "rxjs";
import { skipWhile } from "rxjs/operators";

const many = range(1, 5);
const skipWhileLessTwo = many.pipe(skipWhile(x => x < 2));
skipWhileLessTwo.subscribe(console.log);