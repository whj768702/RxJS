import { throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

const source = throwError('this is an error');
const example = source.pipe(catchError(val => of(`I caught: ${val}`)));

example.subscribe(console.log);