/*
empty就是产⽣⼀个直接完结的Observable对象，没有参数，不产⽣任
何数据，直接完结。
*/
import { empty } from "rxjs"

empty().subscribe({
  next: () => console.log('next'),
  complete: () => console.log('complete')
});
// complete