"use strict";
function identity(arg) {
    return arg;
}
identity({ x: 12, y: 121 });
// identity({ x: 12 });
identity({ x: 12, y: 121, z: 1212 });
const obj11 = { value: 1 };
const s = {
    area: 1,
    radius: 2
};
class PluginH {
}
class QQPlugin extends PluginH {
    say() {
        throw new Error("Method not implemented.");
    }
}
