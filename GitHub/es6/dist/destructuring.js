'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var languages = ['JAvaScript', 'PHP', 'Ruby'];

var js = 'JAvaScript',
    php = 'PHP',
    ruby = 'Ruby';


var scores = [3, 4, [5, 6]];

// let [low, mid, [high, higher]] = scores;

function computeScore(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        low = _ref2[0],
        mid = _ref2[1];

    return console.log(low, mid);
};

computeScore([3, 4]);

function getScores() {
    return [3, 4, 5];
};

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

console.log(low, mid, high);

var user = {
    firstname: 'Nastya',
    lastname: "Zelen",
    social: {
        facebook: 'NastyaFb',
        twitter: 'NastyaTwit'
    }
};

// let {firstname: first, lastname: last, social: { facebook: fb }, age = 30} = user;

function post(url, _ref3) {
    var _ref3$data = _ref3.data,
        firstname = _ref3$data.firstname,
        lastname = _ref3$data.lastname,
        cache = _ref3.cache;

    console.log(firstname, lastname, cache);
};

var result = post('api/users', { data: user, cache: false });

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

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    facebook = _getUserInfo.social.facebook;

console.log(firstname, lastname, facebook);