import { interval } from 'rxjs';
import {pairwise, take} from 'rxjs/operators'
/*
 把前一个值和当前值以数组形式返回
*/

const source = interval(1000).pipe(pairwise(), take(5));
source.subscribe(console.log)