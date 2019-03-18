/*
* 让一个Observable对象在被订阅的时候，总是先吐出指定的若干个数据。
*/
import { startWith } from "rxjs/operators";
import { of } from "rxjs";

of('from source')
.pipe(startWith('first', 'second') )
.subscribe(console.log);
