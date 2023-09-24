const val = 'hello world';

const fun = (e: any) => {
    console.log('e :>> ', e);
};

fun(val);

const syn = Symbol();

console.log('syn :>> ', syn);

const obj = {
    [syn]: '12121',
};

console.log('obj :>> ', obj[syn]);

let greeting: string;

const aaa = '21212';

let yes: boolean;

let bin: number;

let bint: bigint = 1111n;

let sym: symbol = Symbol();

let sym2: symbol = Symbol.for('888');

const sym3: unique symbol = Symbol();
const obj1 = {
    a: 1,
};

interface Foo {
    [sym3]: string;
    readonly b: unique symbol;
    a: number;
}

let u: undefined;
let nul: null;

let m2: any = undefined;
let m3: void = undefined;
let m4: unknown = undefined;

let m5: any = null;
let m6: unknown = null;

const bar = (): void => {
    console.log('1111 :>> ', 1111);
};

function log(p: string): void {
    console.log(p);
}

enum Season {
    Spring = 1,
    Summer,
    Fall,
    Winter,
}

let se: Season = Season.Fall;

let ns: number = Season.Winter;

enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

const sd: string = Direction.Up;
// const sd1: Direction = 'up';

enum Color {
    Black = 0,
    White = 'white',
}

enum YesOrNo {
    YES,
    NO,
}

let yes1: YesOrNo = YesOrNo.NO;

const point: { x: number; y: number; z?: number; readonly t: number } = { x: 1, y: 2, t: 9 };

const point1: {} = { x: 1 };

const point3: object = { x: 1, y: 2 };

function f(...args: [string, number]) {}

let tu: [string, number?];

tu = ['7'];

tu = ['', 9];

function ff(...args: [number, string?]) {
    return;
}

ff(8, '1');

const testArr = ([a, b]: [number, ...number[]]) => {
    console.log(a);
    console.log(b);
};

testArr([1, 2, 8]);

let add: { (x: number): number } = y => {
    return 1;
};

let add2 = (y: number): number => {
    return 1 + y;
};

add(9);

function test(x: number, y: number): number;
function test(x: number, y: string): number;
function test(x: number, y: number | string): number {
    console.log(x);
    console.log(y);

    return x;
}

class Rect {
    height: number;
    width: number;
    val!: number;
    private _foo: number = 1;
    constructor() {
        this.height = 20;
        this.width = 30;
    }

    get foo(): number {
        return this._foo;
    }

    set foo(val: number) {}

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
    private aa: number = 1;
    public a: string = '1';
    constructor(public x: number) {}
}

class Extra extends Base {
    constructor(p: any) {
        super(p);
        console.log(this.a);
    }
}

const base = new Base(2);

const extra = new Extra(3);

extra.a = '';

console.log(base.x);

const return1 = (): number => {
    return 11;
};

function return2(): number {
    return 22;
}

class Counter {
    private a: number = 1;

    add = (): this => {
        this.a = this.a + 1;
        return this;
    };

    getRes = (): number => {
        return this.a;
    };
}

const res = new Counter().add().add().getRes();

console.log('res :>> ', res);

class A {
    foo(): this {
        return this;
    }
}

class B extends A {
    bar(): this {
        return this;
    }
}

const b = new B().bar().foo();

interface CircleType {
    radius: number;
    area: () => number;
}

class Circle {
    radius: number = 1;
    area() {
        return 1;
    }
}

const cc: Circle = new Circle();
const ccc: CircleType = new Circle();

// let adv: (x: number) => number;
let adv: { (x: number): number };
adv = function (x: number) {
    return x;
};

function capitalize<T extends string>(str: T): Capitalize<T> {
    if (typeof str !== 'string') {
        return str;
    }

    const ret = str.charAt(0).toUpperCase() + str.slice(1);
    return ret as Capitalize<T>;
}

function f2<T, U>(x: T, y: U) {
    return 1;
}

function f3<T, U>(x: T, y: U) {
    return { x, y };
}

f2(2, '3s');

const arr1: Array<string> = [];