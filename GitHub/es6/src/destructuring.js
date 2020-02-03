let languages = ['JAvaScript', 'PHP', 'Ruby'];

let [js, php, ruby] = ['JAvaScript', 'PHP', 'Ruby'];

let scores = [3, 4, [5, 6]];

// let [low, mid, [high, higher]] = scores;

function computeScore([low, mid]) {
    return console.log(low, mid);
};

computeScore([3, 4]);

function getScores() {
    return [3, 4, 5];
};

let [low, mid, high] = getScores();
console.log(low, mid, high);

let user = {
    firstname: 'Nastya',
    lastname: "Zelen",
    social: {
        facebook: 'NastyaFb',
        twitter: 'NastyaTwit'
    }
};

// let {firstname: first, lastname: last, social: { facebook: fb }, age = 30} = user;

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);

};

let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return {
        firstname: 'Nastya',
        lastname: "Zelen",
        social: {
            facebook: 'NastyaFb',
            twitter: 'NastyaTwit'
        }
    };
};

let {firstname, lastname, social: { facebook }} = getUserInfo();

console.log(firstname, lastname, facebook);
