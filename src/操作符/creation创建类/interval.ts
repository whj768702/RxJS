import { interval } from "rxjs";

const source$ = interval(1000);
source$.subscribe(console.log); // 0,1,2,3……