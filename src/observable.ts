import { Observable } from "rxjs";

const onSubscribe = (observer: { next: (arg0: number) => void; complete: () => void; }) => {
    let number = 1;
    const handle = setInterval(() => {
        observer.next(number++);
        if (number > 3) {
            clearInterval(handle);
            observer.complete();
        }
    }, 1000);
};

const source$ = new Observable(onSubscribe);
const theObserver = {
    next: (item:Number) => console.log(item),
    complete: () => console.log('no data')
}
source$.subscribe(theObserver);