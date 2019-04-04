/*
无论上游产生什么数据，传给下游的都是同一的数据。
*/
import { mapTo, take } from 'rxjs/operators';
import { interval } from 'rxjs';

const example = interval(1000).pipe(take(4));
const result = example.pipe(mapTo('a'));

result.subscribe(console.log);