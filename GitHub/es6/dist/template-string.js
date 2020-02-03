'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ' ', ' ', ''], ['Hello ', ' ', ' ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log('Hello ' + name + '!');
};

greet('Nastya');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + ',\n        From: ' + from + ',\n        Subject: ' + subject + ',\n        Message: ' + message + '\n    ');
};

createEmail('zelen@gmail.com', 'aca@mail.com', 'Mam', 'Hello how are you?');

var name = 'Nastya';
console.log(upperName(_templateObject, name, name, name));

function upperName(literals) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    return literals[0] + values.join(' ').toUpperCase();
};