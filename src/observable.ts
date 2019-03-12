import { Observable } from "rxjs";

const onSubscribe = (observer: Observable) => {
    let number = 1;
    const handle = setInterval(() => {
        observer.next(number++);
        if (number > 3) {
            clearInterval(handle);
        }
    }, 1000);
};

const source$ = new Observable(onSubscribe);
const theObserver = {
    next: (item:Number) => console.log(item)
}
source$.subscribe(theObserver);