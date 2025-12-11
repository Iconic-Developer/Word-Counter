"use strict";

let input = document.getElementById('text');

input.addEventListener('input', function(){

    // character count
    let text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;


    // word count
    let word = text.split(" ");
    let trimWord = text.trim(); 
    let finalText = word.filter(function(val){
        return val != "";
    })
    document.getElementById('word').innerHTML = finalText.length;
    


})


