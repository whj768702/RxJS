import { interval } from "rxjs";
import { bufferCount } from "rxjs/operators";

const source = interval(1000);
const bufferThree = source.pipe(bufferCount(3));

bufferThree.subscribe(val => {
  console.log('buffered values: ', val);
});