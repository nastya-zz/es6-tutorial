function greet (greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
};

greet('Hi', 'Bill');

function sum (...values) {
    return values.reduce((prevVal, currentVal) => prevVal + currentVal);
};

console.log(sum(1, 2, 8, 9, 4, 6));
