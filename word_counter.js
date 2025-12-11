"use strict";

let input = document.getElementById('text');

input.addEventListener('input', function(){

    // character count
    let text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;


})


