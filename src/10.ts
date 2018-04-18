import * as Rx from "rxjs";
//
// //combineLatest会取得各个observable最后送出的值，再输出成一个值
// // newest送出了0，但此时source并没有送出过任何值，所以不会执行callback
// // source送出了0，此时newest最后一次送出的值为0，把这两个数传入callback得到0。
// // newest送出了1，此时source最后一次送出的值为0，把这两个数传入callback得到1。
// // newest送出了2，此时source最后一次送出的值为0，把这两个数传入callback得到2。
// // source送出了1，此时newest最后一次送出的值为2，把这两个数传入callback得到3。
// //以此类推
// const source = Rx.Observable.interval(500).take(3);
// const newest = Rx.Observable.interval(300).take(6);
//
// const example1 = source.combineLatest(newest, (x, y) => x +y);
//
// example1.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });
// //结果：0、1、2、3、4、5、6、7、complete
//
//
//
// //zip取每个observable相同位置的元素传入callback
// // newest2送出了第一个值0，但此时source2并没有送出第一个值，所以不会执行callback。
// // source2送出了第一个值0，newest2之前送出的第一个值为0，把这两个数传入callback得到0。
// // newest2送出了第二个值1，但此时source2并没有送出第二个值，所以不会执行callback。
// // newest2送出了第三个值2，但此时source2并没有送出第三个值，所以不会执行callback。
// // source2送出了第二个值1，newest2之前送出的第二个值为1，把这两个数传入callback得到2。
// // newest2送出了第四个值3，但此时source2并没有送出第四个值，所以不会执行callback。
// // source2送出了第三个值2，newest2之前送出的第三个值为2，把这两个数传入callback得到4。
// // source2结束example2就直接结束，因为source2跟newest2不会再有对应顺位的值
// const source2 = Rx.Observable.interval(500).take(3);
// const newest2 = Rx.Observable.interval(300).take(6);
//
// const example2 = source2.zip(newest2, (x, y) => x + y);
// example2.subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });
// //结果：0、2、4、complete



//withLatestFrom运作方式跟combineLatest有点像，只是它有主从的关系，只有在主要的observable送出新的值时，
//才会执行callback，附随的observable只是在背景下运作
//withLatestFrom会在main送出值的时候执行callback，但请注意如果main送出值时some
//之前没有送出过任何值callback仍然不会执行！
const main = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), (x, y) => x);
const some = Rx.Observable.from([0,1,0,0,0,1]).zip(Rx.Observable.interval(300), (x, y) => x);

const example3 = main.withLatestFrom(some, (x, y) => {
    // console.log(`x: ${x}, y: ${y}`);
    return y === 1 ? x.toUpperCase() : x;
});
example3.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
//结果: h、e、l、L、O


