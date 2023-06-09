var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num;
num = 1;
var str = "1";
var bool = true;
var u = undefined;
var n = null;
var numArr = [1, 2, 3];
var numArr2 = [1, 2, 3];
var strArr = ["1"];
strArr[0].slice();
function foo(name, id) {
    return {
        name: name,
        id: id ? id : -1,
    };
}
console.log(foo("nicole"));
var obj = { name: "nicole" };
var obj2 = { name: "nicole" };
var Person = (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    return Person;
}());
var obj3 = { name: "nicole", id: 1 };
var obj4 = new Person("nicole", 1);
function add(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) { return x + y; };
var age;
age = 18;
age = "18";
var direction = "east";
var Car = (function () {
    function Car(color) {
        this.color = color;
    }
    Car.prototype.print = function () {
        return "The color of this car is " + this.color;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    return Car;
}());
var car = new Car("white");
console.log(car.print());
car.setColor("black");
console.log(car.print());
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(color) {
        var _this = _super.call(this, color) || this;
        _this.type = "sedan";
        return _this;
    }
    Sedan.prototype.print = function () {
        return "The color is " + this.getColor();
    };
    return Sedan;
}(Car));
var sedan = new Sedan("white");
console.log(sedan.print());
//# sourceMappingURL=index.js.map