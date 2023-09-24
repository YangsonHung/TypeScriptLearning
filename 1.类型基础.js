"use strict";
const val = 'hello world';
const fun = (e) => {
    console.log('e :>> ', e);
};
fun(val);
const syn = Symbol();
console.log('syn :>> ', syn);
const obj = {
    [syn]: '12121',
};
console.log('obj :>> ', obj[syn]);
let greeting;
const aaa = '21212';
let yes;
let bin;
let bint = 1111n;
let sym = Symbol();
let sym2 = Symbol.for('888');
const sym3 = Symbol();
const obj1 = {
    a: 1,
};
let u;
let nul;
let m2 = undefined;
let m3 = undefined;
let m4 = undefined;
let m5 = null;
let m6 = null;
const bar = () => {
    console.log('1111 :>> ', 1111);
};
function log(p) {
    console.log(p);
}
var Season;
(function (Season) {
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Fall"] = 3] = "Fall";
    Season[Season["Winter"] = 4] = "Winter";
})(Season || (Season = {}));
let se = Season.Fall;
let ns = Season.Winter;
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
const sd = Direction.Up;
// const sd1: Direction = 'up';
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color["White"] = "white";
})(Color || (Color = {}));
var YesOrNo;
(function (YesOrNo) {
    YesOrNo[YesOrNo["YES"] = 0] = "YES";
    YesOrNo[YesOrNo["NO"] = 1] = "NO";
})(YesOrNo || (YesOrNo = {}));
let yes1 = YesOrNo.NO;
const point = { x: 1, y: 2, t: 9 };
const point1 = { x: 1 };
const point3 = { x: 1, y: 2 };
function f(...args) { }
let tu;
tu = ['7'];
tu = ['', 9];
function ff(...args) {
    return;
}
ff(8, '1');
const testArr = ([a, b]) => {
    console.log(a);
    console.log(b);
};
testArr([1, 2, 8]);
let add = y => {
    return 1;
};
let add2 = (y) => {
    return 1 + y;
};
add(9);
function test(x, y) {
    console.log(x);
    console.log(y);
    return x;
}
class Rect {
    height;
    width;
    val;
    _foo = 1;
    constructor() {
        this.height = 20;
        this.width = 30;
    }
    get foo() {
        return this._foo;
    }
    set foo(val) { }
    init() {
        this.val = 12;
    }
    static staticGetWidth = () => {
        return 11;
    };
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
console.log(Rect.staticGetWidth());
console.log(new Rect().getHeight());
console.log(new Rect().getWidth());
class Base {
    x;
    aa = 1;
    a = '1';
    constructor(x) {
        this.x = x;
    }
}
class Extra extends Base {
    constructor(p) {
        super(p);
        console.log(this.a);
    }
}
const base = new Base(2);
const extra = new Extra(3);
extra.a = '';
console.log(base.x);
const return1 = () => {
    return 11;
};
function return2() {
    return 22;
}
class Counter {
    a = 1;
    add = () => {
        this.a = this.a + 1;
        return this;
    };
    getRes = () => {
        return this.a;
    };
}
const res = new Counter().add().add().getRes();
console.log('res :>> ', res);
class A {
    foo() {
        return this;
    }
}
class B extends A {
    bar() {
        return this;
    }
}
const b = new B().bar().foo();
class Circle {
    radius = 1;
    area() {
        return 1;
    }
}
const cc = new Circle();
const ccc = new Circle();
// let adv: (x: number) => number;
let adv;
adv = function (x) {
    return x;
};
function capitalize(str) {
    if (typeof str !== 'string') {
        return str;
    }
    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret;
}
function f2(x, y) {
    return 1;
}
function f3(x, y) {
    return { x, y };
}
f2(2, '3s');
const arr1 = [];
