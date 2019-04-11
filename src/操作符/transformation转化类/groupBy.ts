/*
group into observables based on provided value.
groupBy的输出是一个高阶Observable对象，每个内部Observable对象
包含上游产生的满足某个条件的数据，即某个分组的数据。
*/
import { from } from "rxjs";
import { groupBy, mergeMap, toArray } from "rxjs/operators";

interface Obj {
  id: number,
  name: string
}
from([
  {id: 1, name: 'javascript'},
  {id: 2, name: 'html'},
  {id: 2, name: 'css'},
  {id: 1, name: 'webpack'},
  {id: 3, name: 'typescript'}]
).pipe(
  groupBy(p => p.id),
  mergeMap((group) => group.pipe(toArray()))
  ).subscribe(val => console.log(val));