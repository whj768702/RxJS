/*
和takeUntil作用相反。跳过满足notifier的Observable
Returns an Observable that skips items emitted
by the source Observable until a second Observable emits an item.
*/
import { interval, timer } from "rxjs"
import { skipUntil } from "rxjs/operators"

const many = interval(1000)
const notifier = timer(2000)
const skipUntilTwoSeconds = many.pipe(skipUntil(notifier))
skipUntilTwoSeconds.subscribe(console.log)
