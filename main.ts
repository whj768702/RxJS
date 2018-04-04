import * as Rx from "rxjs";

const button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map((event: MouseEvent) => event.clientX)
    .scan((count: number, clientX) => count + clientX, 0)
    .subscribe(count => console.log(count));

let observable = Rx.Observable.create((observer) =>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});
console.log('just before subscribe');
observable.subscribe({
    next: x => console.log(`got value ${x}`),
    error: err => console.log(`something wrong occurred ${err}`),
    complete: () => console.log('done')
});
console.log('just after subscribe');

//取消订阅
function subscribe(observer) {
    let intervalID = setInterval(() => {
        observer.next('hi');
    }, 1000);

    return function unsubsribe(){
        clearInterval(intervalID);
    }
}
let unsubscribe = subscribe({next: (x) => console.log(x)});
setTimeout(() => {
    unsubscribe();
}, 2000);

let observable1 = Rx.Observable.create(function subscribe(observer){
    let intervalID = setInterval(() => {
        observer.next('hello');
    }, 1000);

    return function unsubscribe() {
        setTimeout(() => clearInterval(intervalID), 2000);
    }
});
observable1.subscribe({next: (x) => console.log(x)}).unsubscribe();