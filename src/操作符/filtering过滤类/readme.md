|              功能需求              |                 适用的操作符                  |
| :--------------------------------: | :-------------------------------------------: |
|     过滤掉不满足判定条件的数据     |                    filter                     |
|    获得满足判定条件的第一个数据    |                     first                     |
| 获得满足判定判定条件的最后一个数据 |                     last                      |
|  从数据流中选取最先出现的若干数据  |                     take                      |
|  从数据流中选取最后出现的若干数据  |                   takeLast                    |
| 从数据流中选取数据直到某种情况发生 |             takeWhile、takeUntil              |
|  从数据流中忽略最先出现的若干数据  |                     skip                      |
|  从数据流中忽略最后出现的若干数据  |                   skipLast                    |
| 从数据流中忽略数据直到某种情况发生 |             skipWhile、skipUntil              |
|       基于时间的数据流量筛选       |     throttleTime、debounceTime、auditTime     |
|     基于数据内容的数据流量筛选     |           throttle、debounce、audit           |
|     基于采样方式的数据流量筛选     |              sample、sampleTime               |
|           删除重复的数据           |                   distinct                    |
|         删除重复的连续数据         | distinctUntilChanged、distinctUntilKeyChanged |
|       忽略数据流中的所有数据       |                ignoreElements                 |
|      只选取指定出现位置的数据      |                   elementAt                   |
|  判断是否只有一个数据满足判定条件  |                    single                     |





