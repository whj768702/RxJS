/*
zip执行时，会立即订阅所有上游Observable，然后开始合并数据。
只要任何一个上游Observable吐完所有数据后就调用complete.
*/
import { of, zip } from "rxjs";

const age$ = of(10, 15, 20, 25);
const name$ = of('张三', '李四', '赵五');
zip(age$, name$).subscribe((x) => console.log(x), null, () => console.log('over'));