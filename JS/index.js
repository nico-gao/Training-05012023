// primitive data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol

// console.log(typeof "1");
// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// // prototype chain
// console.log({});
// // {} -> prototype (object) -> __proto__ -> __proto__ -> null

// // pass by value (primitive) or reference (object)?

// var a = 1;
// function foo(input) {
//   input = 2;
//   console.log(input); // 2
// }

// foo(a);
// console.log(a); // 1

// var b = 1;
// var c = b;
// b = 3;
// console.log(b, c); // 3, 1

// // coersion
// const res = true + false;
// console.log(res);

// console.log("1" == 1);
// console.log("1" === 1);

// // object

// var obj = {};
// var obj1 = Object.create({});
// var obj2 = new Object();

// console.log(obj.__proto__.__proto__);

// console.log(obj);
// console.log(obj1);
// console.log(obj2);

// class MyObject {
//   constructor() {}
// }

// var obj3 = new MyObject();
// console.log(obj3);

// function foo1() {}

// foo1.a = "a";
// console.log(foo1.a);

// var obj4 = { name: "nicole" };
// function foo2(input) {
//   // by reference
//   input.name = "adam";
//   console.log(input); // adam
//   console.log(input === obj4); // true
// }
// foo2(obj4);
// console.log(obj4); // adam

// declare variables
/**
 *              var    |     let     |     const
 * scope:   function        block         block
 * hoisting:    yes           no            no
 * reassign:    yes           yes           no
 * redeclare:   yes           no            no
 */

// function foo3() {
//   // console.log(a); // undefined vs not defined
//   if (true) {
//     var a = 1; // hoisting
//   }
//   console.log(a); // 1
// }

// foo3();

// var b = 1;
// b = 2;

// let c = 1;
// c = 2;

// // const d = 1;
// // d = 2;

// const obj = {};
// obj.a = 1;

// function foo() {
//   console.log("inside function");
// }

// const foo2 = () => {};

// console.log(foo2());

// class, syntax sugar
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   // class method
//   walk() {
//     console.log(this.name + " is walking...");
//   }
// }

// const p = new Person("nicole");
// const p2 = new Person("adam");
// console.log(p);

// class method
// p.walk();
// p2.walk();

// instance method
// p.run = function () {
//   console.log(this.name + " is running...");
// };
// p.__proto__.run = function () {
//   console.log(this.name + " is running...");
// };

// Person.prototype.run = function () {
//   console.log(this.name + " is running...");
// };
// p.run();
// p2.run();

// constructor function
// function Person1(name) {
//   this.name = name;
// }

// const p1 = new Person1("nicole");
// console.log(p1);

// function Person2(name) {
//   let obj = {};
//   obj.name = name;
//   obj.__proto__ = Person2.prototype;
//   return obj;
// }

// const p3 = Person2("nicole");
// console.log(p3);

// OOP principles - abstraction, inheritance, encapsulation, polymorphism

// encapsulation - hiding information from the public

// class Person {
//   #name;
//   constructor(name) {
//     // this.#name = name;
//     this._name = name;
//     this.age = 1;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     console.log("setter");
//     this._name = newName;
//   }

//   getAge() {
//     return this.age;
//   }

// #getName() {
//   console.log("private method");
//   return this.#name;
// }

// getName() {
//   return this.#getName();
// }
// }

// const p = new Person("nicole");
// console.log(p.name);
// p.name = "new name";
// console.log(p.name);

// inheritance

// class Employee extends Person {
//   constructor(name, salary) {
//     super(name);
//     this.salary = salary;
//   }

//   getAge() {
//     return "employee age " + this.age;
//   }

//   getAge(number = 0) {
//     return this.age + number; // 1 + undefined -> not a number
//   }
// }

// const e = new Employee("nicole", 1);
// console.log(e.name);

// function Person1(name) {
//   this.name = name;
// }

// Person1.prototype.walk = function () {};

// function Employee1(name, salary) {
//   Person1.call(this, name);
//   this.salary = salary;
// }

// Employee1.prototype = Object.create(Person1.prototype);
// Employee1.prototype.constructor = Employee1;

// const e1 = new Employee1("nicole", 1);
// console.log(e1);

// console.log(Person1.prototype);

// polymorphism - override, overload
// override - same method name in child class will over write the one on parent class
// overload - same method name with different set of arguments, JS doesn't support it

// const e2 = new Employee("nicole", 1);
// console.log(e2.getAge());
// console.log(e2);

// abstraction - JS doesn't support this
// abstract class - we don't create an instance of abstract classes

// abstract class vs interface

// instance method, class method, static method
// class Person {
//   static count = 0;
//   constructor(name) {
//     this.name = name;
//     Person.count++;
//   }

//   static getCount() {
//     return Person.count;
//   }
// }

// const p = new Person();
// const p1 = new Person();
// console.log(Person.getCount());

// p.walk();

// array

const arr = [1, 2, 3];

// console.log(
//   arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );

// console.log(arr);

// console.log(
//   arr.forEach((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const obj = { name: "nicole" };
// const a = "name";
// console.log(obj.a, obj[a]);

// console.log(arr);

console.log(
  arr.forEach((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
  })
);

Array.prototype.myForEach = function (cb) {
  // console.log(cb(5));
  // console.log(this);
  // return "hi";
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

console.log(
  arr.myForEach((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
  })
);

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const newValue = cb(this[i], i, this);
    result.push(newValue);
  }
  return result;
};

console.log(
  arr.map((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
  })
);
console.log(
  arr.myMap((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
  })
);

// reduce, filter, concat, find, slice, splice, some, every...

// reduce

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

sum = arr.reduce((acc, cur, index, array) => {
  return acc + cur;
}, 0);

console.log(sum);
