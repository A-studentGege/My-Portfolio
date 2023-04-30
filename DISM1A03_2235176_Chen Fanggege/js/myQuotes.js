"use strict";
/*

    Author: Chen Fanggege
    Class: DISM 03
    
    Filename: myQuotes.js
    Date created: July 15th 2022
    Content: Javascript to change quote content 

*/


// -----------------------------------------
// initial index is 0
var quoteIndex = 0;



// generate new index randomly
function newIndex() {
    var bContinue = true;
    var prevIndex = quoteIndex;
    var newIndex;

    do {
        newIndex = Math.floor(Math.random() * 10);
        // new index cannot be the same as previous index
        if (newIndex == prevIndex) {
            continue;
        }
        else {
            quoteIndex = newIndex;
            bContinue = false;
        }

    } while (bContinue);
}



// generate my quotes (Chinese)
function pickQuotes(index) {
    var myQuotes = ["&nbsp; 痴迷是一场颠乱无序的漩涡，掌握洋流之人亦是受困深海之人。",
        "&nbsp; 即使是在地上野蛮生长着的荆棘，也会渴望绞杀高悬夜空的白月光。",
        "&nbsp; 希望每一寸危险的结合，都像齿轮卡口的严丝合缝一般，将两个生命一同转动。",
        "&nbsp; 恋爱啊，会离开的是恋人，一辈子的才是爱人。",
        "&nbsp; 十年前是青梅竹马，十年后是人间佳话，只有当下，我们什么也不是。",
        "&nbsp; 在那里，我将避开命运的相遇，从而躲过一场浩劫，保全余生。",
        "&nbsp; 我选择孤独的理由是对背叛的恐惧。",
        "&nbsp; 自私并不可怖，可怖的是自私得不够彻底，反倒被无情地捉住把柄。",
        "&nbsp; 我很想念以前，想念吞咽下的每一秒时光，都是发苦的蜜糖。",
        "&nbsp; 对于梦，我无法躲开这种不定的欣喜和悲伤，除非保持清醒，永不合眼。"]
    var currentQuote = myQuotes[index];
    return currentQuote;
}


// generate corresponding translation
function transQuotes(index) {
    var myQuotes = [
        "Obsession is a chaotic whirlpool, and those who master the currents are also those who are trapped in the deep sea.",
        "Even the thorns that grow savagely on the ground will desire to strangle the moonlight that hangs high in the sky.",
        "I shall tightly fit in every gap between us, hoping that the gear of destiny will turn our lives together.",
        "\"I like you\" is for a while, \"I love you\" is forever.",
        "Ten years ago we were good childhood friends, ten years later we'll be a good couple, only now, we are nothing.",
        "There, I will avoid a fateful encounter, thus escaping from a disaster and saving the rest of my life.",
        "I choose to be lonely because I'm afraid of being betrayed.",
        "selfishness is not despicable, but not being selfish enough is.",
        "I miss the past, miss every second being swallowed, like bitter sweets.",
        "For dreams, I cannot escape from the uncertain joy and sorrow, unless I stay awake and never close my eyes."]
    var currentQuote = myQuotes[index];
    return currentQuote;
}


// fading in effect
function fadeIn() {
    const element = document.getElementById("quote_text");
    console.log(element.style);
    // Initilize the opacity with 0
    let initOpacity = 0;
    element.style.display = 'block';
    // Update the opacity with 0.01 every 10 milliseconds
    const timer = setInterval(function () {
        if (initOpacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = initOpacity;
        element.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
        // for IE8 and earlier, alpha filter is used for IE
        initOpacity += 0.01;
    }, 10);
}


// when clicked, changequote function will auto change to next quote
function changeQuote() {
    quoteIndex++;
    if (quoteIndex == 10) {
        quoteIndex = 0;
    }
    document.getElementById("myQuote").innerHTML = pickQuotes(quoteIndex);
    document.getElementById("quoteTranslate").innerHTML = transQuotes(quoteIndex);
    fadeIn();
}


// change to another quote randomly (every 30 secs)
function randomQuote() {
    newIndex();
    document.getElementById("myQuote").innerHTML = pickQuotes(quoteIndex);
    document.getElementById("quoteTranslate").innerHTML = transQuotes(quoteIndex);
    fadeIn();
}

// when clicked, the 30sec timer will restart
function clearTimer(){
    clearInterval(handle);
    handle = setInterval(randomQuote, 30000);
}


// display
document.getElementById("myQuote").innerHTML = randomQuote();
var element = document.getElementById("quote_text");
changeQuote();
// change to a random quote every 30 secs
var handle = setInterval(randomQuote, 30000);
// when clicked, change to next quote in the sequence and restart 30sec counting
element.addEventListener("click", changeQuote);
element.addEventListener("click", clearTimer);


