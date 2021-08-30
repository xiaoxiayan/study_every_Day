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

/*  泛型 **/
function getData<T>(value:T):T{
    return value;
}   
getData<number>(123);