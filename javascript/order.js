document.addEventListener('DOMContentLoaded', function () {

function order() {
    'use strict';
    window.location.href = 'bestilling.html';
}

document.getElementById('product').getElementsByTagName('button')[0].addEventListener('click', order);

})
