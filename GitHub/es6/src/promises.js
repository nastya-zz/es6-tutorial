function applyForVisa(documents) {
    console.log('Обработка документа ..');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('В визе отказано');
        }, 2000);    
    });
    return promise;
};

function bookHotel() {
    console.log('Бронируем отель');
};

function buyTickets() {
    console.log('Покупаем билеты');
};

applyForVisa({})
    .then(visa => console.info('Виза получена'))
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));






// applyForVisa({}, function(visa) {
//     console.info('Виза получена');
//     // bookHotel(visa, function(reservation) {
//     //     buyTickets(reservation, function(){},function(error){});
//     // }, function(error) {

//     // });
    
// }, 
// function(reason){
//     console.error(reason);
// });