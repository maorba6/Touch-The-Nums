'use strict'
var gLength = 6;
var gCount = 1;
var gGameInterval;
var gSecond = 0;


function easy() {
    gLength = 4;
    init();
}
function hard() {
    gLength = 6;
    init();
}
function medium() {
    gLength = 5;
    init();
}


var numbers = makeNumbers(gLength)
var res = shuffle(numbers)
renderTable(gLength,res)

function init() {

    var numbers = makeNumbers(gLength)
    var res = shuffle(numbers)
    gSecond = 0;
    gCount =1;
    var elTimer = document.querySelector(".timer")
    elTimer.innerText = ' Timer : ' + gSecond
    clearInterval(gGameInterval)
    renderTable(gLength,res)

}



function renderTable(length,res) {
    var strHTML = '';
    var cellIdx = 0;
    for (var i = 0; i < length; i++) {
        strHTML += ' <tr>';
        for (var j = 0; j < length; j++) {
            strHTML += `<td data - i="${i}" data - j ="${j}" data - value =${res[cellIdx]} onclick=cellClicked(this,${res[cellIdx]}) onmousehover="" style="cursor: pointer;" class = "unclicked"> ${res[cellIdx]} </td>`;
            cellIdx++
        }
        strHTML += '</tr>';
    }
    var elTbody = document.querySelector('.tableGen');

    elTbody.innerHTML = strHTML;
}

function makeNumbers(length) {
    var numbers = [];
    for (var i = 1; i <= (length ** 2); i++) {
        numbers.push(i);
    }
    return numbers;
}

function cellClicked(clickedNum, num) {
    if (num === 1) {
        startTimer()
    }
    if (num === gCount) {
        clickedNum.classList.remove("unclicked")
        clickedNum.classList.add("clicked")
        gCount++
        if (gCount === (gLength ** 2) + 1) {
            console.log('Win ! ');
            clearInterval(gGameInterval)
        }
    }
}

function startTimer() {

    var elTimer = document.querySelector(".timer")
    gGameInterval = setInterval(function () {
        gSecond++
        elTimer.innerText = ' Timer : ' + gSecond
    }, 1000)
}

function getRandomInteger(min, max) {
    var randomNum = Math.random() * (max - min);
    randomNum = Math.floor(randomNum);
    return randomNum + min;
}



function shuffle(items) {
    var randIdx, keep, i;
    for (i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInteger(0, items.length - 1);

        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}

