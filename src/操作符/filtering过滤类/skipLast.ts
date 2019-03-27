/*
跳过最后count个数据。
*/
import { range } from "rxjs";
import { skipLast } from "rxjs/operators";

const many = range(1, 5);
const skipLastTwo = many.pipe(skipLast(2));
skipLastTwo.subscribe(console.log);