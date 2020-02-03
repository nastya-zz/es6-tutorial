'use strict';

let movieList = document.getElementById('movies');
    
    function addMovieToList(movie) {
        let img = document.createElement('img');
        img.src = movie.Poster;
        movieList.appendChild(img);
    }
    
    function getData(url) {
        return new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function(){
                if(xhr.status === 200){
                    let json = JSON.parse(xhr.response);
                    resolve(json.Search);
                    
                } else {
                    reject(xhr.statusText);
                }
            };
            
            xhr.onerror = function(error) {
                reject(error);
            }
            
            xhr.send();    
        });
    }
    
    let superman = getData(`http://www.omdbapi.com/?apikey=730993d6&s=superman`);
    let batman = getData(`http://www.omdbapi.com/?apikey=730993d6&s=batman`);

    
    superman
        .then(movies => movies.forEach(movie => addMovieToList(movie)))
        .catch(error => console.error(error));


    batman
        .then(movies => movies.forEach(movie => addMovieToList(movie)))
        .catch(error => console.error(error));
        
    // Promise.all([superman, batman])
    //     .then(movies => movies.forEach(movie => addMovieToList(movie)))
    //     .catch(error => console.error(error));
