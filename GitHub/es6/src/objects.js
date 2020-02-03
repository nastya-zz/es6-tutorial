let firstName = 'Bill',
    lastName = 'Gates', 
    email = 'bill@mail.com';

 let person = {
    firstName,
    lastName,
    email,

    sayHello() {
       return  `Hi, my name is ${this.firstName} ${this.lastName}`;
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        return this.firstName = name;
    }
 };

 console.log(person.fullName = 'Oleg');

 