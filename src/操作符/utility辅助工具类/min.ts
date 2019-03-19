import { of } from "rxjs";
import { min } from "rxjs/operators";

of(5, 4, 2, 8, 7).pipe(min()).subscribe(console.log);

// example 2
interface Person {
  age: number,
  name: string
}
of<Person>(
  { age: 7, name: 'Foo' },
  { age: 5, name: 'Bar' },
  { age: 9, name: 'Beer' }
).pipe(
  min<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
).subscribe(x => console.log(x.name));