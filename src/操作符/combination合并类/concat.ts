/*
 把多个数据流以首尾相连方式合并
*/
import { concat, of } from "rxjs";

const source1$ = of(1, 2, 3);
const source2$ = of(4, 5, 6);
const concated$ = concat(source1$, source2$);
concated$.subscribe(console.log);