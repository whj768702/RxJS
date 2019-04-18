| Scheduler |                                                              |
| :-------: | ------------------------------------------------------------ |
|   asap    | asap会尽量利用Micro Task，也就是在异步的情况下，尽量早的安排下一个数据的产生 |
|   async   | async利用的是Macro Task                                      |
|   queue   | 如果调用它的schedule函数式参数delay是0，那它就用同步的方式执行，如果delay参数大于0，那它的表现和async一模一样 |

