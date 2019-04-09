/*
collect all values until closing selector emits, emit buffered values.
*/
import { interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

const oneSecondInterval = interval(1000);
const fiveSecondInterval = () => interval(5000);
const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(fiveSecondInterval));

bufferWhenExample.subscribe(val => {
  console.log('emitted buffer: ', val);
});