/*
exhaustMap对数据的处理策略和switchMap相反，先产生的内部Observable优先级总是更高，
后产生的内部Observable对象被利用的唯一机会，就是之前的内部Observable对象已经完结。
特定于⽹页中AJAX请求这种场景，如果某种AJAX请求要维持现存的
AJAX请求，那就⽤得上exhaustMap，这种喜欢“旧”请求胜过“新”请求的例
⼦不多，但并不是不存在。⽐如，如果利⽤AJAX建⽴服务器和浏览器之
间的长连接，让服务器可以沿着AJAX通道推送消息下来，那么只要有这
样长连接的AJAX存在，就没有必要建⽴新的AJAX连接，exhaustMap适合
这样的场景。
*/
import { delay, take, exhaustMap } from 'rxjs/operators';
import { interval, of, merge } from "rxjs";

const sourceInterval = interval(1000);
const delayedInterval = sourceInterval.pipe(delay(10), take(4));
const exhaustSub = merge(delayedInterval, of(true)).pipe(exhaustMap(() => sourceInterval.pipe(take(5))));
exhaustSub.subscribe(console.log);