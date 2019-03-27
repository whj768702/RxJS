/*
跳过前count个数据。
*/
import { interval } from "rxjs";
import { skip } from "rxjs/operators";

const many = interval(1000);
const skipThree = many.pipe(skip(3));
skipThree.subscribe(console.log);