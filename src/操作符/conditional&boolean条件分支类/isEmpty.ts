/*
检查一个上游Observable对象是不是空的(不吐出任何数据)
*/
import { of, interval, empty } from "rxjs";
import { isEmpty } from "rxjs/operators";

of(1, 2, 3).pipe(isEmpty()).subscribe(console.log);
empty().pipe(isEmpty()).subscribe(console.log);
