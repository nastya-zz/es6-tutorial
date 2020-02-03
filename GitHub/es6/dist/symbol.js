'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol.for('name');
var name = Symbol.keyFor(symbol);

console.log(symbol);

var user = _defineProperty({
    username: 'r2d2'
}, Symbol('password'), 'c3po');

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(Object.getOwnPropertySymbols(user));