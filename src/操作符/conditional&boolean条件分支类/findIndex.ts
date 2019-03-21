/*
Emits only the index of the first value emitted by the source Observable
that meets some condition.
*/
import { of } from "rxjs"
import { findIndex } from "rxjs/operators"

of(1, 2, 3, 5, 7)
  .pipe(findIndex(x => x % 2 === 0))
  .subscribe(console.log)
