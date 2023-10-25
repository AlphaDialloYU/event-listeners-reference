"use strict"

window.onload = function (event) {
    let additionForm = document.getElementById("additionForm")
    additionForm.onsubmit = calculateSum

    let locationForm = document.getElementById("locationForm")
    locationForm.onsubmit = locationResult

    let musicElement= document.getElementById("🎶")
    console.log(musicElement)
    
    musicElement.onmouseover = flipMusic
    musicElement.onmouseout = flipMusic
}

document.onkeydown = function (event) {
    console.log(event)


    if (event.key === "?") {
        console.log("showHelpBox()")
    }
    else if (event.key === "ArrowUp") {
        console.log("movePlayerUp()")
    } else if (event.key === "ArrowUp") {
        console.log("movePlayerDown()")
    } else if (event.key === "ArrowLeft") {
        console.log("movePlayerLeft()")
    } else if (event.key === "ArrowRight") {
        console.log("movePlayerRight()")
    }
}

function flipMusic (event) {
    event.target.classList.toggle("flipped")
}


function calculateSum(event) {
    event.preventDefault()
    let x = event.target.elements.leftOperand.valueAsNumber
    let y = event.target.elements.rightOperand.valueAsNumber

    let sum = x + y

    let resultDiv = document.getElementById("additionResult")
    resultDiv.innerHTML = `<h4> ${x} + ${y} = <span class ="display-result-red">${sum}</h4>`
}

function locationResult(event) {
    event.preventDefault()
    let city = event.target.elements.city.value
    let state = event.target.elements.state.value
    let country = event.target.elements.country.value


    let locationDiv = document.getElementById("locationResult")
    locationDiv.innerHTML = `<h5> <span class = "display-location-blue">  ${city}, ${state}, ${country} </h5>`
}
