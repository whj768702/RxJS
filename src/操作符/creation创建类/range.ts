/*
产生一个范围内的1递增的数
*/

import { range } from "rxjs";

const source$ = range(1, 10);

source$.subscribe(console.log);
