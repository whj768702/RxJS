import { Observable } from "rxjs";

const onSubscribe = (observer: { next: (arg0: number) => void; error: (arg0: string) => void; complete: () => void; }) => {
    let number = 1;
    const handle = setInterval(() => {
        observer.next(number++);
        observer.error('something is wrong');
        if (number > 3) {
            clearInterval(handle);
            observer.complete();
        }
    }, 1000);
};

const source$ = new Observable(onSubscribe);
const theObserver = {
    next: (item:Number) => console.log(item),
    error: (err: any) => console.log(err),
    complete: () => console.log('no data')
}
source$.subscribe(theObserver);