// Exercise 6
var chargeBGColorBtn = document.getElementsByTagName("button")
var chargeBGColor = document.getElementById("f-bg")

chargeBGColorBtn[0].addEventListener("click", () => {
    chargeBGColor.style.backgroundColor='blue';
})
chargeBGColorBtn[1].addEventListener("click", () => {
    chargeBGColor.style.backgroundColor='red';
})
chargeBGColorBtn[2].addEventListener("click", () => {
    chargeBGColor.style.backgroundColor= "white";
})

// Exercise 10
var i = 0;
function read() {
    if(!i) {
        document.getElementById("more").style.display = "inline";
        document.getElementById("rdot").style.display = "none";
        document.getElementById("show").innerHTML = "Show less"
        i = 1;
    }
    else {
        document.getElementById("more").style.display = "none";
        document.getElementById("rdot").style.display = "inline";
        document.getElementById("show").innerHTML = "Show more"
        i = 0;
    }
}

// Exercise 13
var minutes = 00;
var seconds = 00;
var tens = 00;
var apTens = document.getElementById("tens")
var apSeconds = document.getElementById("seconds")
var apMinutes = document.getElementById("minutes")
var btnStart = document.getElementById("btn-start")
var btnStop = document.getElementById("btn-stop")
var btnReset = document.getElementById("btn-reset")
var interval;

function startClock() {
    tens++;
    if (tens < 9) {
        apTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        apTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        apSeconds.innerHTML = "0" + seconds;
        tens = 0;
        apTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        apSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        minutes++;
        apMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        apSeconds.innerHTML = "0" + 0
    }
}

btnStart.onclick = function () {
    interval = setInterval(startClock);
}
btnStop.onclick = function () {
    clearInterval(interval)
}
btnReset.onclick = function () {
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    minutes = "00";
    apTens.innerHTML = tens;
    apSeconds.innerHTML = seconds;
    apMinutes.innerHTML = minutes;
}