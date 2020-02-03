let symbol = Symbol.for('name');
let name = Symbol.keyFor(symbol);

console.log(symbol);

let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po'
};

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));
