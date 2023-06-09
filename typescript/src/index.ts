// primitive types
let num: number;
num = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// objects

let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

let strArr: string[] = ["1"];
strArr[0].slice();

function foo(name: string, id?: number) {
  return {
    name,
    id: id ? id : -1,
  };
}

console.log(foo("nicole"));

interface IPerson {
  name: string;
  id?: number;
}

type TPerson = {
  name: string;
  id: number;
};

let obj: IPerson = { name: "nicole" };
// anonymous, not reusable
let obj2: { name: string; id?: number } = { name: "nicole" };

class Person {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

let obj3: Person = { name: "nicole", id: 1 };
let obj4 = new Person("nicole", 1);

// 1. function keyword
function add(x: number, y: number): number {
  return x + y;
}

// 2. arrow function
const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

// 3. typeof
const add3: typeof add = (x, y) => x + y;

// 4. type
type AddFn = (x: number, y: number) => number;

// 5. interface
interface IAddFn {
  (x: number, y: number): number;
}

// union
let age: number | string;
age = 18;
age = "18";

// literal type with union
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// class
class Car {
  // member visibility
  // public color: string;
  private color: string; // only accessibile within the class
  // protected color: string; // only accessible within the class and subclasses
  // readonly color: string;

  constructor(color: string) {
    this.color = color;
  }

  print() {
    return "The color of this car is " + this.color;
  }

  getColor() {
    return this.color;
  }

  setColor(newColor: string) {
    this.color = newColor;
  }
}

let car = new Car("white");
console.log(car.print());
// console.log(car.color);
car.setColor("black");
console.log(car.print());

type Color = "White" | "Black" | "Red" | "Blue";

const enum Color1 {
  White = "White",
  Black = "Black",
  Red = "Red",
}

class Sedan extends Car {
  type: string;
  constructor(color: Color1) {
    super(color);
    this.type = "sedan";
  }

  print() {
    return "The color is " + this.getColor();
  }
}

let sedan = new Sedan(Color1.White);
console.log(sedan.print());

interface IRadio {
  turnOnRadio(): void;
}

class Car2 implements IRadio {
  turnOnRadio() {}
}

class CellPhone implements IRadio {
  turnOnRadio() {}
}

// interface PartialPointX { x: number; }
// interface Point extends PartialPointX { y: number; }
// let point: Point = {x:1, y:1}

// type PartialPointX = { x: number; };
// type Point = PartialPointX & { y: number; };

// type PartialPointX = { x: number; };
// interface Point extends PartialPointX { y: number; }

interface PartialPointX {
  x: number;
}
type Point = PartialPointX & { y: number };

// generic types
function toNumArr(x: number, y: number): number[] {
  return [x, y];
}

function toStringArr(x: string, y: string): string[] {
  return [x, y];
}

function toArr<T, X>(x: T, y: X): [T, X] {
  return [x, y];
}
toArr(1, 2);
toArr("1", "2");

// tuple
let tuple: [number, string, () => void] = [1, "2", () => {}];
tuple[2];
