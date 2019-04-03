import { of, timer } from "rxjs";
import { debounce } from "rxjs/operators";

const example = of('wait', 'one', 'second', 'last will display');
const debounceExample = example.pipe(debounce(() => timer(1000)));

const subscribe = debounceExample.subscribe(console.log);