/*
上游Observable吐出的每一个的函数是否通过判定函数检验，
都通过，则every产生的新Observable对象就会吐出一个且唯
一的布尔值true；反之，只要上游吐出的数据有一个检验为false，
也不用等到上游Observable完结，every产生的Observable对象
就立刻吐出false。
*/
import { of } from "rxjs";
import { every } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6).pipe(
  every(x => x < 5)
).subscribe(console.log);