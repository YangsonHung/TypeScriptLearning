type T0 = true extends boolean ? string : number;
type T1 = boolean extends string ? string : number;

type T2 = Exclude<false, boolean>

type T3 = Extract<string | number, number | boolean> // number

type T4 = Exclude<string | number, number | boolean> // string

type T5 = Exclude<string | undefined, null | undefined> // string