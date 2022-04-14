// 手写 promise
// promise 有三种状态， 一旦执行， 就会进入 pending 状态，
// 有两个可调用的函数 res, rej
class myPromise {
  static PENDING = '待定'; static FULFILLD = '成功'; static REJECTED = '拒绝';
  constructor(fnc) {
    this.status = myPromise.PENDING
    this.result = null
    //  创建保存fn的数组，在 promise 中 使用异步的时候
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    // 在 promise 中 输入 throw new Error ,在 then中是可以直接打印出来的
    try {
      fnc(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result) {
    //  因为 then里面的函数要在最后执行， 所以需要把 resolve 的执行吊到最后
    setTimeout(() => {
      if (this.status === myPromise.PENDING) {
        // 执行 res的时候，如果状态是 pending ， 那么把状态改为 fulfilld 成功
        this.status = myPromise.FULFILLD
        this.result = result
        //  执行保存的函数
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === myPromise.PENDING) {
        this.status = myPromise.REJECTED
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    })
  }
  then(onFULFILLED, onREJECTED) {
    // 我们再 then的时候 。返回一个 实例， 就可以一直的 then 链式调用下去
    return new myPromise((resolve, reject) => {
      console.log('then---')
      // promise 中，如果参数不传入 函数， 是会忽略的
      // 如果传入的不是函数，转换成函数
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { }
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { }
      // 当promise 中调用 异步的时候， 会先执行 上下文中的 then,
      // 这个时候是没有执行 resolve的，所以状态无法改变，then就会白执行，所以，当then 的状态是
      // padding 的时候，先把 fn存起来
      if (this.status === myPromise.PENDING) {
        this.resolveCallbacks.push(onFULFILLED)
        this.rejectCallbacks.push(onREJECTED)
      }
      if (this.status === myPromise.FULFILLD) {
        setTimeout(() => {
          onFULFILLED(this.result)
        })
      }
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          onREJECTED(this.result)
        })
      }
    })

  }

}

console.log(1)
let promise = new myPromise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    console.log(promise.status)
    resolve('最后执行')
    console.log(promise.status)
    console.log(4)
  })
})

promise.then(
  result => { console.log(promise.status); console.log(result) },
  result => { console.log('rej===>', result.message) },
).then(
  result => { console.log('ddd') },
).then(
  result => { console.log('aaaa') },
)
console.log(3)
