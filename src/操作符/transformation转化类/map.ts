import { map } from 'rxjs/operators';
import { of } from 'rxjs';
const example = of(3, 1, 4);
const mapFunc = function(value: number, index: number) {
  return `${value} ${this.separator} ${index}`;
}
const context = {separator: ':'};
const result = example.pipe(map(mapFunc, context));

result.subscribe(console.log);