/*
throw产⽣的Observable对象也是什么都不做，直接出错，抛出的错误
就是throw的参数
*/
import { throwError } from "rxjs"

const source$ = throwError("错")
source$.subscribe({
  next: () => console.log("next"),
  complete: () => console.log("complete"),
  error: err => console.log(err)
})
