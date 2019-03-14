/*
Creates an Observable that, on subscribe, 
calls an Observable factory to make an Observable for each new Observer.
在创建之时并不会做分配资源的⼯作，只有当被订阅的时候，才会去创建
真正占⽤资源的Observable，之前产⽣的代理Observable会把所有⼯作都转
交给真正占⽤资源的Observable
*/
import { defer, of } from "rxjs"

const observableFactory = () => of(1, 2, 3)
const source$ = defer(observableFactory)
source$.subscribe(console.log)
