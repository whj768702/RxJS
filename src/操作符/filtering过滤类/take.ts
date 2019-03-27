import { interval } from "rxjs";
import { take } from "rxjs/operators";

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe(console.log);