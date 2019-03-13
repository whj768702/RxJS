/*
Creates an Observable from 
an Array, 
an array-like object, 
a Promise, 
an iterable object, 
or an Observable-like object.
*/
import { from } from "rxjs"

// 数组
const arraySource = from([0, 1, 2, 3, 4]);
arraySource.subscribe(console.log);//01234
// 类数组
const arrayLikeSource = from('arraylike');
arrayLikeSource.subscribe(console.log);// a r r a y l i k e
// promise
const promiseSource = from(new Promise(resolve => resolve('hello')));
promiseSource.subscribe(console.log);// hello