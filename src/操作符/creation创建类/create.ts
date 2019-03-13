import { Observable } from 'rxjs';

const onSubscribe = (observer: {next: (arg0: number) => void}) => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
    if (number > 3) {
      clearInterval(handle);
    }
  }, 1000);
}
const source$ = Observable.create(onSubscribe);
source$.subscribe(console.log);