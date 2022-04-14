// 手写 promise
// promise 有三种状态， 一旦执行， 就会进入 pending 状态，
// 有两个可调用的函数 res, rej
class myPromise {
 static PENDING = '待定' ; static FULFILLD = '成功' ; static REJECTED = '拒绝'
  status: string;
  result: any;
  constructor (fn) {
    this.status =  myPromise.PENDING
    this.result = null
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(result) {
    // 执行 res的时候，如果状态是 pending ， 那么把状态改为 fulfilld 成功
    if(this.status === myPromise.PENDING) {
      this.status = myPromise.FULFILLD
      this.result = result
    }
  }
  reject(result) {
    if(this.status === myPromise.PENDING) {
      this.status = myPromise.REJECTED
      this.result = result
    }
  }

}

let promise = new myPromise((resolve, reject) => {
    resolve('成功')
})

console.log('wat')
