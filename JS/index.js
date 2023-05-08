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

// const arr = [1, 2, 3];

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

// console.log(
//   arr.forEach((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );

// Array.prototype.myForEach = function (cb) {
//   // console.log(cb(5));
//   // console.log(this);
//   // return "hi";
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// console.log(
//   arr.myForEach((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );

// Array.prototype.myMap = function (cb) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     const newValue = cb(this[i], i, this);
//     result.push(newValue);
//   }
//   return result;
// };

// console.log(
//   arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );
// console.log(
//   arr.myMap((value, index, array) => {
//     console.log(value, index, array);
//     return value * 2;
//   })
// );

// // reduce, filter, concat, find, slice, splice, some, every...

// // reduce

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// sum = arr.reduce((acc, cur, index, array) => {
//   return acc + cur;
// }, 0);

// console.log(sum);

// ES6
// rest operator, spread operator, destructuring, class, arrow function, promise

// function foo(val1, val2, val3, val4, val5) {
//   console.log(arguments); // object, array-like
//   console.log(arguments[0], arguments[4]);
// }

// foo(1, 2, 3, 4, 5, 6);

// // rest operator
// function foo1(...args) {
//   console.log(args);
// }

// foo1(1, 2, 3, 4, 5, 6);

// function foo2(val1, val2, ...args) {
//   console.log(args);
// }

// foo2(1, 2, 3, 4, 5, 6, 7);

// // spread operator ...
// const arr = [1, 2, 3, [4]]; // => 1, 2, 3
// const arr2 = [...arr]; // new array
// console.log(arr, arr2);

// console.log(arr[3] === arr2[3]); // true
// // shallow copy or depp copy
// // shallow copy - create a copy that it's properties will point to the same references as the properties from the original object
// // deep copy - they won't point to the same references
// const a = { name: "nicole" };
// const b = a;
// b.name = "adam";
// console.log(a, b);

// const c = { ...a };
// c.name = "new name";
// console.log(a === c);

// const d = { name: { value: "nicole" } };
// const e = { ...d };
// e.name.value = "new name";
// console.log(d.name === e.name);

// // strict/loose comparison => primitive data types
// // shallow/deep comparison
// console.log(a === c);
// console.log(a == c);

// const obj = { name: "nicole", age: 18 };
// const obj1 = { ...obj, name: "adam" };
// console.log(obj1);

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = [0, ...a1, 0, ...a2];
// console.log(a3);
// const a4 = [a1, a2];
// console.log(a4);

// // destructuring - declare variable names for us, get the values from the object/array
// const obj2 = { name: "nicole", age: 18 };
// const { name, age } = obj2;
// console.log(name, age);
// // const name1 = obj2.name1;
// // const age = obj2.age;

// const arr3 = [1, () => {}];
// const [state, useState] = arr3;
// console.log(state, useState);

// const { name: name2, age: age2 } = obj2; // rename the variable
// console.log(name2, age2);

/* arrow function vs regular function 
1. syntax
2. 'this': regular - refering to the object that's calling the function
           arrow function - refer to the 'this' from the outer context
3. arguments only works in regular functions
*/

// this - refering to the object that's calling the function

// const obj = {
//   name: "nicole",
//   foo: function () {
//     console.log(this);
//     const foo2 = () => {
//       console.log(this);
//     };
//     foo2();
//   },
// };

// const obj2 = {
//   name: "nicole",
//   foo: () => {
//     console.log(this);
//   },
// };

// obj.foo();
// obj2.foo();

// const func = () => {
//   console.log(arguments);
// };

// func(1, 2, 3);

// closure - give access of any outer function scope to inner function
// why - to create a pirvate scope
function foo() {
  // >>>
  let x = 1;
  let y = 2;
  // <<< closure
  return function () {
    console.log(x);
  };
}

let x = foo();
x();

// iife - immediately invoked function expression
// the function is invoked immediately after it's defined

(function foo2() {
  console.log("hello");
})();

let counter = (() => {
  let count = 0;
  return {
    getCount() {
      return count;
    },
    increment() {
      count++;
    },
  };
})();

console.log(counter.count); // undefined
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

// iterate through objects
const obj = { name: "nicole", age: 18 };

// for ... in
for (let key in obj) {
  console.log(key, obj[key]);
}

// for ... of
const array = [1, 2, 3];
for (let val of array) {
  console.log(val);
}

// Object.entries()
console.log(Object.entries(obj));

for ([key, val] of Object.entries(obj)) {
  console.log(key, val);
}

// Object.keys()
console.log(Object.keys(obj));
let keys = Object.keys(obj);

// defined our own forEach on Object
Object.prototype.forEach = function (cb) {
  let keys = Object.keys(this);
  for (let i = 0; i < keys.length; i++) {
    cb(keys[i], this[keys[i]]);
  }
};

const obj2 = { name: "nicole", age: 18 };
obj2.forEach((key, val) => {
  console.log(key, val);
});

Array.prototype.mySplice = function (start, deleteCount, ...items) {
  let tempArr;
  let removedElements;
  if (deleteCount !== undefined) {
    removedElements = this.slice(start, start + deleteCount);
    tempArr = [...this.slice(0, start), ...this.slice(start + deleteCount)];
  } else {
    removedElements = [];
  }

  if (items.length !== 0) {
    tempArr = [
      ...this.slice(0, start),
      ...items,
      ...this.slice(start + deleteCount),
    ];
  }
  this.length = tempArr.length;
  tempArr.forEach((element, index) => {
    this[index] = element;
  });
  return removedElements;
};

const arr = [1, 2, 3];
console.log(arr);
let removed = arr.mySplice(1, 2, 4);
console.log(arr);
console.log(removed);
