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

function foo3() {
  // console.log(a); // undefined vs not defined
  if (true) {
    var a = 1; // hoisting
  }
  console.log(a); // 1
}

foo3();

var b = 1;
b = 2;

let c = 1;
c = 2;

// const d = 1;
// d = 2;

const obj = {};
obj.a = 1;

function foo() {
  console.log("inside function");
}

const foo2 = () => {};

console.log(foo2());

// class, syntax sugar
class Person {
  constructor(name) {
    this.name = name;
  }
  // class method
  walk() {
    console.log(this.name + " is walking...");
  }
}

const p = new Person("nicole");
const p2 = new Person("adam");
console.log(p);

// class method
p.walk();
p2.walk();

// instance method
// p.run = function () {
//   console.log(this.name + " is running...");
// };
// p.__proto__.run = function () {
//   console.log(this.name + " is running...");
// };

Person.prototype.run = function () {
  console.log(this.name + " is running...");
};
p.run();
p2.run();

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
