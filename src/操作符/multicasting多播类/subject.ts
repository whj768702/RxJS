import { map } from 'rxjs/operators';
import { Subject } from "rxjs";

const subject = new Subject();
subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();

subject.pipe(map((val:number) => val*2)).subscribe(
  value => console.log(value),
  err=>console.log(err),
  () => console.log('completee')
);