import { interval, of } from "rxjs";
import { mergeScan } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(mergeScan((acc, value) => {
  return of(acc + value);
}, 0));
example.subscribe(console.log);