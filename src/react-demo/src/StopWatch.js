import React from 'react';
import observe from './hoc';
import { Subject, interval, empty, of, throwError, BehaviorSubject } from 'rxjs';
import { switchMap, timeInterval, scan, merge, map } from 'rxjs/operators';

const StopWatchView = ({ milliseconds, onStart, onStop, onReset }) => {
  return (
    <div>
      <h1>{ms2Time(milliseconds)}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

const ms2Time = (milliseconds) => {
  // let ms = parseInt(milliseconds % 1000, 10);
  let seconds = parseInt((milliseconds / 1000) % 60, 10);
  let minutes = parseInt((milliseconds / (1000 * 60)) % 60, 10);
  let hours = parseInt(milliseconds / (1000 * 60 * 60), 10);

  return `${hours} : ${minutes} : ${seconds}`;
};

const StopWatch = observe(
  StopWatchView,
  () => {
    const button = new Subject();

    const time$ = button.pipe(
      switchMap((value) => {
        switch (value) {
          case 'start': {
            return interval(10).pipe(
              timeInterval(),
              scan((result, ti) => result + ti.interval, 0),
            );
          }
          case 'stop': {
            return empty();
          }
          case 'reset': {
            return of(0);
          }
          default: {
            return throwError('invalid value: ', value);
          }
        }
      }),
    );

    const StopWatch = new BehaviorSubject(0);
    return StopWatch.pipe(
      merge(time$),
      map((value) => ({
        milliseconds: value,
        onStop: () => button.next('stop'),
        onStart: () => button.next('start'),
        onReset: () => button.next('reset'),
      })),
    );
  },
  0,
);

export default StopWatch;
