'use strict';

function add(x, y) {
    return x + y;
}

var add1 = function add1(x, y) {
    return x + y;
};

var person = {
    name: 'Nastya',
    greet: function greet() {
        console.log('Hello my name is ' + this.name);
        console.log(this);
    }
};

person.greet();