import {Observable} from "rxjs/Observable";
import {observable} from "rxjs/symbol/observable";

//skip:略过n个元素，但原有时间会继续存在
//下面输出：3秒后，从3开始输出
const source = Observable.interval(1000);
const example = source.skip(3);
console.log('09ts');
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//takeLast:取最后n个，并且同步送出
//4
//5
//complete
const source2 = Observable.interval(1000).take(6);
const example2 = source2.takeLast(2);

//last:取最后一个
//5
//complete
const example3 = source2.last();

//concat:把多个observable实例合并成一个
//0,1,2,3,4,5,6,complete
const source3 = Observable.interval(1000).take(3);
const source4 = Observable.of(3);
const source5 = Observable.of(4,5,6);
const example4 = source3.concat(source4, source5);
example4.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//startWith:在observable的一开始塞入要发送的元素
//0,0,1,2,3……
const source6 = Observable.interval(1000);
const example5 = source6.startWith(0);
example5.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});

//merge:和concat一样是用来合并observable，但merge是把多个observable同时处理，
//concat是一次处理一个observable
//0,0,1,2,1,3,2,4,5,complete
const source7 = Observable.interval(500).take(3);
const source8 = Observable.interval(300).take(6);
const example6 = source7.merge(source8);
example6.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
