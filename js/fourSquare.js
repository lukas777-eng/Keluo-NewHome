var safae = document.getElementById("safae")
var carla = document.getElementById("carla")
var alberto = document.getElementById("alberto")
var john = document.getElementById('john')

var safaeShowHide = document.getElementById("safaeShowHide")
var carlaShowHide = document.getElementById("carlaShowHide")
var albertoShowHide = document.getElementById("albertoShowHide")
var johnShowHide = document.getElementById('johnShowHide') 

//safae
function displayDescription() {
    safae.style.display = "none" 
    safaeShowHide.style.display = "flex"
}

function displayTeam() {
    safae.style.display = "flex" 
    safaeShowHide.style.display = "none"
}

safae.addEventListener('click', function(){
    safaeShowHide.style.display === "none" ?
    displayDescription() :
    displayTeam()
})

safaeShowHide.addEventListener('click', function(){
    safae.style.display === "none" ?
    displayTeam() :
    displayDescription()
})

//carla
function displayDescriptioncarla() {
    carla.style.display = "none" 
    carlaShowHide.style.display = "flex"
}

function displayTeamcarla() {
    carla.style.display = "flex" 
    carlaShowHide.style.display = "none"
}

carla.addEventListener('click', function(){
    carlaShowHide.style.display === "none" ?
    displayDescriptioncarla() :
    displayTeamcarla()
})

carlaShowHide.addEventListener('click', function(){
    carla.style.display === "none" ?
    displayTeamcarla() :
    displayDescriptioncarla()
})


//alberto
function displayDescriptionalberto() {
    alberto.style.display = "none" 
    albertoShowHide.style.display = "flex"
}

function displayTeamalberto() {
    alberto.style.display = "flex" 
    albertoShowHide.style.display = "none"
}

alberto.addEventListener('click', function(){
    albertoShowHide.style.display === "none" ?
    displayDescriptionalberto() :
    displayTeamalberto()
})

albertoShowHide.addEventListener('click', function(){
    alberto.style.display === "none" ?
    displayTeamalberto() :
    displayDescriptionalberto()
})


//john
function displayDescriptionjohn() {
    john.style.display = "none" 
    johnShowHide.style.display = "flex"
}

function displayTeamjohn() {
    john.style.display = "flex" 
    johnShowHide.style.display = "none"
}

john.addEventListener('click', function(){
    johnShowHide.style.display === "none" ?
    displayDescriptionjohn() :
    displayTeamjohn()
})

johnShowHide.addEventListener('click', function(){
    john.style.display === "none" ?
    displayTeamjohn() :
    displayDescriptionjohn()
})



