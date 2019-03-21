/*
Emits only the first value emitted by the source Observable
that meets some condition.
*/
import { of } from "rxjs";
import { find } from "rxjs/operators";

of(3, 1, 4, 1, 5, 2).pipe(find(x => x%2  === 0)).subscribe(console.log);