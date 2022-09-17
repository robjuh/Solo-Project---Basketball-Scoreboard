// Home
let storeHome = document.getElementById("homescore")
let homePoints = 0

function homeOne() {
    homePoints += 1
    storeHome.textContent = homePoints
}

function homeTwo() {
    homePoints += 2
    storeHome.textContent = homePoints
}

function homeThree() {
    homePoints += 3
    storeHome.textContent = homePoints
}


// Guest 
let storeaway = document.getElementById("guestscore")
let awayPoints = 0

function awayOne() {
    awayPoints +=1
    storeaway.textContent = awayPoints
}

function awayTwo() {
    awayPoints +=2
    storeaway.textContent = awayPoints
}

function awayThree() {
    awayPoints +=3
    storeaway.textContent = awayPoints
}

// Reset
let resetScore = document.getElementById("resetbtn")

function reset() {
    storeHome.textContent = 0
    storeaway.textContent = 0
    homePoints = 0
    awayPoints = 0
}











