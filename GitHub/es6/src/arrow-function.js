function add(x, y) {
    return x + y;
}

let add1 = (x, y) => x + y;


let person = {
    name: 'Nastya',
    greet: function () {
        console.log('Hello my name is ' + this.name);
        console.log(this);
    }
}

person.greet();