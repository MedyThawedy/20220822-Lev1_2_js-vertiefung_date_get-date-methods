let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];


function fnShowDate() {

    d1 = new Date();
    document.getElementById('idPOutput').innerHTML += '<p>' + d1 + '</p>';

    //https://www.w3schools.com/jsref/jsref_getfullyear.asp
    let year = d1.getFullYear();
    document.getElementById('idPOutput').innerHTML += '<p>' + year + '</p>';

    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
    let monthNr = d1.getMonth();
    document.getElementById('idPOutput').innerHTML += '<p>' + monthNr + '</p>';

    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    let dayNr = d1.getDay();
    document.getElementById('idPOutput').innerHTML += '<p>' + dayNr + '</p>';

    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
    let hourNr = d1.getHours();
    document.getElementById('idPOutput').innerHTML += '<p>' + hourNr + '</p>';

    let minuteNr = d1.getMinutes();
    document.getElementById('idPOutput').innerHTML += '<p>' + minuteNr + '</p>';


    let dayName = wochenTag[dayNr];
    document.getElementById('idPOutput').innerHTML += '<p>' + dayName + '</p>';

    let monthName = monate[monthNr];
    document.getElementById('idPOutput').innerHTML += '<p>' + monthName + '</p>';
}

function fnHideDate() {

    document.getElementById('idPOutput').innerHTML = '';

    document.getElementById('idPOutput').innerHTML = '';


    document.getElementById('idPOutput').innerHTML = '';


    document.getElementById('idPOutput').innerHTML = '';


    document.getElementById('idPOutput').innerHTML = '';


    document.getElementById('idPOutput').innerHTML = '';



    document.getElementById('idPOutput').innerHTML = '';


    document.getElementById('idPOutput').innerHTML = '';
}

let d = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

function fnShowDate2() {

    d1 = new Date();
    // document.getElementById('idPOutput').innerHTML += '<p>' + d1 + '</p>';


    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    let dayNr = d1.getDay();
    document.getElementById('idDayOutput').innerHTML = dayNr;

    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
    let hourNr = d1.getHours();
    document.getElementById('idHoursOutput').innerHTML = hourNr;
    document.getElementById('idHours').innerHTML = 'HOURS';

    let minuteNr = d1.getMinutes();
    document.getElementById('idMinutesOutput').innerHTML = minuteNr;
    document.getElementById('idMinutes').innerHTML = 'MINUTES';

    let secondNr = d1.getSeconds();
    document.getElementById('idSecondsOutput').innerHTML = secondNr;
    document.getElementById('idSeconds').innerHTML = 'SECONDS';

    let dayName = d[dayNr];
    document.getElementById('idDayOutput').innerHTML = dayName;
    document.getElementById('idDays').innerHTML = 'DAY';

    document.getElementById('idPeriodOutput').innerHTML = (d1.getHours() >= 12) ? "PM" : "AM";

    document.getElementById('idPeriod').innerHTML = 'PERIOD';

    // https://stackoverflow.com/questions/2170923/whats-the-easiest-way-to-call-a-function-every-5-seconds-in-jquery
    setInterval(function () {
        //code goes here that will be run every 5 seconds.  
        fnShowDate2();
    }, 1000);



}


