/*
split one observable into two based on provided predicate.
*/
import { from } from 'rxjs';
import { partition } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5, 6]);
const [even, odd] = partition((val: any) => val%2 === 0)(source);
even.subscribe(console.log);
odd.subscribe(console.log);