interface Point {
    x: number;
    y: number;
}

function identity<T extends Point>(arg: T): T {
    return arg;
}

identity({ x: 12, y: 121 });
// identity({ x: 12 });
identity({ x: 12, y: 121, z: 1212 });


// const a = identity<number>(33);

// const bb = identity<object>({ a: 1111 });

// function assign<T = number, U = number>(a: T, b: U) {
//     return 1;
// }

// assign('1', 44);

type con = { value: string };

type Container<T> = { value: T };

const obj11: Container<number> = { value: 1 };

interface Circle1 {
    area: number;
    radius:number;
}

interface Rectangle {
    width: number;
    height: number;
    area: number;
}

type Shape = Circle1 | Rectangle;


const s: Shape = {
    area: 1,
    radius: 2
};

abstract class PluginH {
    abstract say(): void
}


class QQPlugin extends PluginH {
    say(): void {
        throw new Error("Method not implemented.");
    }

}