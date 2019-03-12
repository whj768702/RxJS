import { Observable } from 'rxjs';

const onSubscribe = (observer: { next: (arg0: number) => void; }) => {
  let number = 1;
  const handle = setInterval(() => {
    observer.next(number++);
  }, 1000);

  return {
    unsubscribe: () => {
      clearInterval(handle);
    }
  }
};

const source$ = new Observable(onSubscribe);
const subscription = source$.subscribe(console.log);
setTimeout(() => {
  subscription.unsubscribe();
}, 3500);