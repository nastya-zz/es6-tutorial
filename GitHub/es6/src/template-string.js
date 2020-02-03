function greet (name) {
    console.log(`Hello ${name}!`);
    
};

greet('Nastya');

function createEmail (to, from, subject, message) {
    console.log(`
        To: ${to},
        From: ${from},
        Subject: ${subject},
        Message: ${message}
    `);
};

createEmail('zelen@gmail.com', 'aca@mail.com', 'Mam', 'Hello how are you?');

let name = 'Nastya';
console.log(upperName`Hello ${name} ${name} ${name}`);

function upperName (literals, ...values) {
    return literals[0] + values.join(' ').toUpperCase();    
};

