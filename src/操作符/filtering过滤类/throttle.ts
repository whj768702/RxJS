/*
参数是：throttle<T>(
  durationSelector: (value: T) => SubscribableOrPromise<any>,
  config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T>
*/
import { interval } from "rxjs"
import { throttle } from "rxjs/operators"

const source = interval(1000)
const example = source.pipe(throttle(val => interval(2000)))
const subscribe = example.subscribe(console.log)
