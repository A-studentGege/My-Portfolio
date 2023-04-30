"use strict";

/*

    Author: Chen Fanggege
    Class: DISM 03
    
    Filename: typingEffect.js
    Date created: July 24th 2022
    Content: Javascript to produce typing effect for welcome line

*/

var i = 0;
var txt = "\"Gege here!\""; 
var speed = 100;
/* The speed/duration of the effect in milliseconds */


function typeWriter_xl() {
    if (i < txt.length) {
        document.getElementById("gegeHere_xl").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter_xl, speed);
        // call typewriter_xl function after 100 milliseconds
        // only call once
    }
}

typeWriter_xl();

