"use strict";
/*

    Author: Chen Fanggege
    Class: DISM 03
    
    Filename: greetingInNavbar.js
    Date created: July 20th 2022
    Content: Javascript to change greeting line on my navbar,
            according to the day  

*/

// -----------------------------------------
// greeting example:
//     July 1, 2022, FRIDAY || I hope you are happy today!
//    [today's information]           [greeting]
// -----------------------------------------

// Date object
var d = new Date();


// generate today's information
function timeInfo(todayObj) {
    // get today's date and year
    var thisDate = todayObj.getDate();
    // var thisYear = todayObj.getFullYear();

    // get this month's name
    var monthName = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"];
    var thisMonth = monthName[todayObj.getMonth()];

    // return result as in [month] [date], [year], [day]
    return thisMonth + "&nbsp;&nbsp;" + thisDate;
}

// modified for full display in xl and larger viewport
function timeInfo_xl(todayObj) {
    // get today's date and year
    var thisDate = todayObj.getDate();
    var thisYear = todayObj.getFullYear();

    // get this month's name
    var monthName = ["January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"];
    var thisMonth = monthName[todayObj.getMonth()];

    // get today's day
    var dayName = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var thisDay = dayName[todayObj.getDay()];

    // return result as in [month] [date], [year], [day]
    return thisMonth + "&nbsp;&nbsp;" + thisDate + ",&nbsp;&nbsp;" + thisYear + ",&nbsp;&nbsp;" + thisDay;
}


// generate corresponding greetings
function todayGreeting(todayObj) {
    var allGreetings = ["Good things take time.", // Sun
        "Make each day your masterpiece.",
        "A smile will make you look better.",
        "Remember to give youself a break.",
        "Nothing is impossible.",
        "Stars can't shine without darkness.",
        "Life is about creating yourself.",];
    var index = todayObj.getDay();
    var greeting = allGreetings[index];

    return greeting;
}


// combine the time information and greeting
function createGreeting(todayObj) {
    var greeting = timeInfo(todayObj) + "&nbsp;&nbsp;||&nbsp;&nbsp;" + todayGreeting(todayObj);
    return greeting;
}

function createGreeting_xl(todayObj) {
    var greeting = timeInfo_xl(todayObj) + "&nbsp;&nbsp;||&nbsp;&nbsp;" + todayGreeting(todayObj);
    return greeting;
}


// display
document.getElementById("greetingLine").innerHTML = createGreeting(d);
document.getElementById("greetingLine_xl").innerHTML = createGreeting_xl(d);
