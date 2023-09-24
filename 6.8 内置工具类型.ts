interface T9 {
    a: string;
    b: number;
}

type T9O = Partial<T9>;

type RT9O = Required<T9O>;

interface A9 {
    x: string;
    y: number;
}

type AR = Readonly<A9>;

const q9: AR = { x: '1', y: 2 };
// q9.x = '88'

type K9 = 'x' | 'y';
type T99 = number;

type K9T99 = Record<K9, T99>;

interface PP {
    a: string;
    b: string;
    c: number;
    k: boolean;
}

function PPF(params: PP) {
    return params;
}

function PPFF(params: Pick<PP, 'a'>) {
    return params;
}
PPFF({ a: '3' });

type EX = Extract<'a' | 'b' | 'c', 'a'>;
type EX1 = Exclude<string | undefined, null | undefined>;

type TP = Parameters<<T>(a: number, b: string, c: T) => string>;

type TCP = ConstructorParameters<new (a: number) => string>

type TR = ReturnType<() => { a: string, b: number }>
