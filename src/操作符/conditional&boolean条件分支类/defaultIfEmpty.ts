/*
Emits a given value if the source Observable completes
without emitting any next value, otherwise mirrors the source Observable.
defaultIfEmpty<T, R>(defaultValue: R = null)
监测上游Observable是否为空，为空则把默认值吐出。否则把上游吐出的数据照搬转交
给下游。
*/
import { of, empty } from "rxjs"
import { defaultIfEmpty } from "rxjs/operators"

of(1, 2, 3)
  .pipe(defaultIfEmpty(0))
  .subscribe(console.log)
empty()
  .pipe(defaultIfEmpty(0))
  .subscribe(console.log)
