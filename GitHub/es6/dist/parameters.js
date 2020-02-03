'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    console.log(greeting + ' ' + name);
};

greet('Hi', 'Bill');

function sum() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    return values.reduce(function (prevVal, currentVal) {
        return prevVal + currentVal;
    });
};

console.log(sum(1, 2, 8, 9, 4, 6));