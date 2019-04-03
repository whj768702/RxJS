import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Person {
  age: number,
  name: string
}
of(
  {age: 4, name: 'foo'},
  {age: 5, name: 'bar'},
  {age: 6, name: 'foo'},
  {age: 7, name: 'foo'},
).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);