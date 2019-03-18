/*
多个Observable对象在一起，谁最先产生数据就是胜者，其余
的输入Observable对象则会被退订而抛弃。
*/
import { race, interval } from "rxjs";
import { mapTo } from "rxjs/operators";

const obs1 = interval(1000).pipe(mapTo('fast one'));
const obs2 = interval(2000).pipe(mapTo('medium one'));
const obs3 = interval(3000).pipe(mapTo('slow one'));

race(obs1, obs2, obs3).subscribe(winner => console.log(winner));