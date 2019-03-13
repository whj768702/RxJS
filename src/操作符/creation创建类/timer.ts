import { timer } from "rxjs";

const souruce$ = timer(3000, 1000);
souruce$.subscribe(console.log);
//订阅3s后
//0, 1, 2 ……每秒产生一个数