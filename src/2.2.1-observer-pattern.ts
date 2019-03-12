/*
观察者模式：

发布者---推送数据--->观察者
发布者<---订阅---观察者

 */

import { Observable } from 'rxjs';
import { of } from 'rxjs';

const source$ = of(1, 2, 3);
source$.subscribe(console.log);