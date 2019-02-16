//skip:略过n个元素，但原有时间会继续存在
//下面输出：3秒后，从3开始输出
const source = Rx.Observable.interval(1000);
const example = source.skip(3);
console.log('09ts');
example.subscribe(
     value => console.log(value),
     (err) => { console.log('Error: ' + err); },
     () => { console.log('complete'); }
);

//takeLast:取最后n个，并且同步送出
//4
//5
//complete
const source2 = Rx.Observable.interval(1000).take(6);
const example2 = source2.takeLast(2);

//last:取最后一个
//5
//complete
const example3 = source2.last();

//concat:把多个Rx.Observable实例合并成一个
//0,1,2,3,4,5,6,complete
const source3 = Rx.Observable.interval(1000).take(3);
const source4 = Rx.Observable.of(3);
const source5 = Rx.Observable.of(4,5,6);
const example4 = source3.concat(source4, source5);
example4.subscribe(
     (value) => { console.log(value); },
    (err) => { console.log('Error: ' + err); },
    () => { console.log('complete'); }
);

//startWith:在Rx.Observable的一开始塞入要发送的元素
//0,0,1,2,3……
const source6 = Rx.Observable.interval(1000);
const example5 = source6.startWith(0);
example5.subscribe(
    (value) => { console.log(value); },
    (err) => { console.log('Error: ' + err); },
    () => { console.log('complete'); }
);

//merge:和concat一样是用来合并Rx.Observable，但merge是把多个Rx.Observable同时处理，
//concat是一次处理一个Rx.Observable
//0,0,1,2,1,3,2,4,5,complete
const source7 = Rx.Observable.interval(500).take(3);
const source8 = Rx.Observable.interval(300).take(6);
const example6 = source7.merge(source8);
example6.subscribe(
    (value) => { console.log(value); },
    (err) => { console.log('Error: ' + err); },
    () => { console.log('complete'); }
);
