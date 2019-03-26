import { range } from "rxjs";
import { filter } from "rxjs/operators";

const source$ = range(1, 5);
const event$ = source$.pipe(filter(x => x%2 === 0));
event$.subscribe(console.log);