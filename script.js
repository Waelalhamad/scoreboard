let scoreEl1 = document.getElementById('score1');
let scoreEl2 = document.getElementById('score2');
let score1 = 0;
let score2 = 0;

function goal1() {
    score1 = score1 + 1
    scoreEl1.innerText = score1
}

function goal2() {
    score2 = score2 + 1
    scoreEl2.innerText = score2
}

function remove1(){
    score1 = score1 - 1
    scoreEl1.innerText = score1
}

function remove2() {
    score2 = score2 - 1
    scoreEl2.innerText = score2
}