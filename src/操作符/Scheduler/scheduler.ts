import { queueScheduler, asapScheduler, asyncScheduler } from "rxjs";

console.log('start');
asyncScheduler.schedule(() => console.log('async'));
asapScheduler.schedule(() => console.log('asap'));
queueScheduler.schedule(() => console.log('queue'));
console.log('end');

console.log('start');
asyncScheduler.schedule(() => console.log('async'));
asapScheduler.schedule(() => console.log('asap'));
queueScheduler.schedule(() => console.log('queue'), 100);
console.log('end');