/*
先到先得快速通过
多个数据流，哪条来数据，就通过哪个。
*/
import { merge, timer } from "rxjs";
import { map } from "rxjs/operators";

const source1$ = timer(0, 1000).pipe(map(x => x + 'A'));
const source2$ = timer(500, 1000).pipe(map(x => x + 'B'));
const merged$ = merge(source1$, source2$);

merged$.subscribe(console.log); //0A 0B 1A 1B……