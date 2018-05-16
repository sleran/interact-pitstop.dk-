function order() {
    'use strict';
    var content = document.getElementById('product').getElementsByTagName('h1')[0];
    var YourOrder = document.getElementById('YourOrder');
    YourOrder.insertAdjacentHTML('beforeend', content);
}

document.getElementById('product').getElementsByTagName('button')[0].addEventListener('click', order);