'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();
    });
}

var superman = getData('http://www.omdbapi.com/?apikey=730993d6&s=superman');
var batman = getData('http://www.omdbapi.com/?apikey=730993d6&s=batman');

superman.then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.error(error);
});

batman.then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.error(error);
});

// Promise.all([superman, batman])
//     .then(movies => movies.forEach(movie => addMovieToList(movie)))
//     .catch(error => console.error(error));