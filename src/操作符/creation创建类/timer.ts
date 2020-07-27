import { timer } from "rxjs";

const source$ = timer(3000, 1000);
source$.subscribe(console.log);
//订阅3s后
//0, 1, 2 ……每秒产生一个数