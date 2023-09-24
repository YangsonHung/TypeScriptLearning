type T = { a?: string; readonly b: number; };

type K = keyof T;

type M = { [P in keyof T]+?: T[P] }; // 同态
type M2 = { [P in keyof T]?: T[P] };
type M3 = { [P in keyof T]: boolean };
type M4 = { [P in K]: T[P] }; // 非同态

type M5 = { a: string };

type OptionalT = Partial<T>;

type RT = Required<T>

type ReadonlyT = Readonly<T>;

// type P = Pick<T, 'a'>;
type P1 = { [P in K]: T[P]; }

function Test (params: T): number {
    console.log('params :>> ', params);

    return 1;
}

const Test2 = (params: T): number => {
    console.log('params :>> ', params);

    return 1;
}

Test({ a: '1', b: 2 });
Test2({ a: '1', b: 2 });

// type T = { a: string; b: number };

// type M = { [P in keyof T]?: T[P] };

// type M3 = Partial<T>;