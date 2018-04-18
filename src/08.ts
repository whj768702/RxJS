// import {Observable} from "rxjs/Observable";
//
// console.log('08.ts start!!!');
// const source = Observable.interval(1000);
// //take:取前n个元素
// //下面例子输出：0、1、2.
// const example = source.take(3);
// example.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err)},
//     complete: () => { console.log('complete'); }
// });
//
// //first:取第一个元素
// //下面例子输出：0
// const example2 = source.first();
// example2.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err)},
//     complete: () => { console.log('complete'); }
// });
//
// //takeUntil:发生某件事情时，让observable直接发送完成(complete)消息
// //下面例子点击click后，interval终止.
// const click = Observable.fromEvent(document.body, 'click');
// const example3 = source.takeUntil(click);
// example3.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err)},
//     complete: () => { console.log('complete'); }
// });
//
// //concatAll:有时，Observable返回的元素又是一个observable，就像二维数组，
// //concatAll可以把它摊平成一维数组
// //下面例子点击一次click，一次性送出1、2、3.
// const source2 = click.map(() => Observable.of(1,2,3));
// const example4 = source2.concatAll();
// example4.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err)},
//     complete: () => { console.log('complete'); }
// });
//
// //简单的拖拉功能
// const dragDOM = document.getElementById('drag');
// const body = document.body;
//
// const mouseDown = Observable.fromEvent(dragDOM, 'mousedown');
// const mouseUp = Observable.fromEvent(body, 'mouseup');
// const mouseMove = Observable.fromEvent(body, 'mousemove');
//
// mouseDown
//     .map(event => mouseMove.takeUntil(mouseUp))
//     .concatAll()
//     .map((event:MouseEvent) => ({x: event.clientX, y: event.clientY}))
//     .subscribe(pos => {
//         dragDOM.style.left = pos.x + 'px';
//         dragDOM.style.top = pos.y + 'px';
//     });
//
// console.log('08.ts end!!!');
