// class Person {
//     constructor(protected n: string, protected x?:number){ //构造函数，  实例化类的时候触发的方法
//         this.n = n;
//         this.x = x
//     }

//     run():void{
//     }
//     getName():string{
//         return this.n
//     }
//     setName(name:string):void{
//         this.n = name
//     }

// }

// class child extends Person {
//     constructor(n:string,x?:number){
//         super(n,x)
//     }
//     getFatherN():any{
//                 return this.n
//     }

// }
// var p = new child('张三222222');

// console.log(p.getFatherN(),'飞飞飞')

//ts 类里面的修饰符
/**
    类里面 就是 ｛ ｝中fun ，类外部就是 p.name这种属性
    public :共有， 在类里面，子类，类外面都能访问
    protected: 保护类型,可以在子类里面访问，类外面无法访问。转换成ES5可以访问，但是ts会报错
    private : 私有 无法在外部，无法在子类访问
 */

/* 抽象类 和抽象方法   无法直接实例化*/
// abstract class  Animal {
//     abstract eat():any;
// }

// class Dog extends Animal{
//     eat(){

//     }
// }

/**  抽象类只能 继承，里面定义的 方法 在继承的 子类中要 实现定义的抽象方法*/


/*
    typeScript  接口
    1、属性接口  对Json的约束

*/
//定义接口
// interface FullName {
//      firstName:string;   //接口中定义的对象 以分号结束 ；
//      secondName:string;
// }

// type MethodsType = 'GET' | 'POST' | 'PUT' | 'PATCH'

// var obj = {
// firstName:'11',
// secondName:'22',
// age:33

// }

// function printLabel(info:FullName):void{

//         console.log(info,'aaa')
// }
// printLabel(obj)
/**
    类类型接口
    多态
interface Animal {
    name:string;
    eat(str:string):void;

}

class cat implements Animal {
    name:string;
    constructor(name:string){
        this.name = name
    }
    eat(food:string){
        console.log(this.name + food )
    }
}

var mycat = new cat('mimi');

mycat.eat('小鱼')

*/

/*
    接口 继承 接口

    interface Animal {
     eat():void;
 }

 interface Person extends Animal {
    work():void;
 }
 class Web implements Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log('吃啥');
    }
    work(){

    }
 }
 */




/*  泛型 **/
/*
    泛型类，比如有个最小堆算法，同时支持返回数字和字符串两个类型，通过泛型来实现
    不仅支持当前类型，对未来，未知的类型也支持



*/

// class MinClass<T>{

//     public list:T[] = [];

//     add(value:T){

//         this.list.push(value)

//     }

//     min():T{

//         var minNum = this.list[0];

//         for( var i = 0 ; i< this.list.length; i++){

//             if(minNum > this.list[i]){

//                 minNum = this.list[i]
//             }
//         }

//         return minNum;
//     }
// }

// var m = new MinClass<string>();

// m.add('z');
// m.add('h');
// m.add('s');
// console.log(m.min())

/*
    泛型类 应用
    定义一个 User 的类型，这个类的作用就是 映射数据库字段，
    然后定义一个 mysqlDb 的类，这个类用于操作数据库，
    然后把 User 类作为参数传入到 mysqlDb 中

    var user = new User({
        username:'张三',
        password:'123456'
    })

    var Db = new MysqlDb()
    Db.add(user)
*/
    // class User{
    //     username:string | undefined;
    //     password:string | undefined;
    // }

    // class MysqlDb {
    //     add(user:User):boolean{
    //         console.log(user,'aaadata')
    //         return true
    //     }
    // }

    // var user = new User

    // user.username = '张三';
    // user.password = '123456';

    // var Db = new MysqlDb()

    // Db.add(user)
//泛型版
    // class MysqlDb<T>{
    //     add(info:T):boolean{
    //         console.log(info)
    //         return true
    //     }
    // }
//想给 user表加数据
// 定义一个 user 类，和 数据库进行映射
// class User{
//         username:string | undefined;
//         password:string | undefined;
//     }

// var user = new User
//     user.username = '张三';
//     user.password = '123456';

// var Db = new MysqlDb<User>()
// Db.add(user)

//泛型接口

// interface configFn<T> {
//     (value:T):T
// }

// function getData<T>(value:T):T{
//     return value
// }

// var myGetData:configFn<string> = getData;

// myGetData('2222')

/*
 综合应用
 功能：定义一个操作数据库的库，支持 Mysql Mssql MongoDb

 要求1：Mysql Mssql MongoDb 功能一样 都有 add update delete get 方法

 注意：约束统一的规范、以及代码重用

 解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2、泛型： 解决 类 、 接口 方法的 复用性、
*/

// interface DBI<T> {

//     add(info:T):boolean;

//     update(info:T,id:number):boolean;

//     delete(id:number):boolean;

//     get(id:number):any[];

// }

//定义一个操作 mysqk 的类

// class Mysql<T> implements DBI<T>{
//     constructor(){
//         //可以进行 axios 之类的操作把

//     }
//     add(info: T): boolean {
//         return true
//     }
//     update(info: T, id: number): boolean {
//         return true

//     }
//     delete(id: number): boolean {
//         return true

//     }
//     get(id: number): any[] {
//         return []
//     }
// }

// class User{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// var u = new User('zz')

// var a = new MysqlDb<User>()
// a.add(u)

/*  模块化   exp */


/*装饰器

    function logClass(parmas:string){
    return function(target:any){
        console.log(parmas);
        console.log(target,'target');
    }
}

@logClass('hello')
class httpClient{
    constructor(){

    }
    getData(){

    }
}

var http = new httpClient();
*/

/*
属性装饰器


 */

//类装饰器
// function logClass(parmas:string){
//     return function(target:any){


//     }

// }
//属性装饰器  接受两个参数，
// 1、原型对象。2、 属性名称

// function logProperty(parmas:any){
//     return function(target:any,attr:any){

//         console.log(target,'----',attr,'parmas==',parmas);
//         target[attr] = parmas

//     }

// }
// @logClass('xxx')
// class httpClient{
//     @logProperty('www.baidu.com')
//     public url:any | undefined ;
//     constructor(){


//     }

//     getData(){


//     }

// }

// let number: number | string
// const apiList = {
//     'LOGIN': '/api/login/loginUsr',
//     'getMenuList': '/api/foodDetail/getItemDetail'
//   }
//   type apiKeyType = keyof typeof apiList
// //   console.log(apiKeyType)
// interface ColumnProps {
//     name: string;
//     menuList: object[];
//     status: number;
//     storeNo: string;
//     type: number
// }


// const b :ColumnProps[] = [{
//     name: 'string',
//     menuList: [],
//     status: 0,
//     storeNo: 'string',
//     type:3 ,
// }]
type Person = {
    name: string;
    age: number;
  }

  let man: Person = {
    name: "Semlinker",
    age: 30
  }

  type Human = typeof man


//   手写 promise