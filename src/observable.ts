import {Observable} from "rxjs";
import {take} from "rxjs/operators";

const observable = Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});
const observer = {
    next: (value) => {console.log('next: ', value)},
    error: (error) => {console.log('error: ', error)},
    complete: () => {console.log('complete')}
};
function startPrint() {
    observable.pipe(take(1)).subscribe(observer);
}
const element = document.getElementById('print');
element.addEventListener('click', startPrint);
