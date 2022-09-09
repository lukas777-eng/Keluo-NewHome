// Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
// const prevBtn = document.querySelector(".prev")
// const nextBtn = document.querySelector(".next")

// prevBtn.addEventListener("click", prevSlide)
// nextBtn.addEventListener("click", nextSlide)

// Utility vars
let index = 0

// Set interval
let interval = setInterval(startInterval, 6000);
let intervalOpacity = setInterval(opa, 6000);

setTimeout(active1opacity, 6000)

function active1opacity() {
    document.querySelector('#active0').setAttribute('style', 'opacity:0.5 !important')
    document.querySelector(`#radio${index}`).checked
}

function opa(){
    console.log(index);
    document.querySelector(`#active${index}`).setAttribute('style', 'opacity:1')
    if (index !== 0) {
        document.querySelector(`#active${index - 1}`).setAttribute('style', 'opacity:0.5')
    }
    console.log(index - 1);
    if (index === 5) {
        setTimeout(opacityLucas, 5900)
    }
}

function startInterval() {
    index++
    moveCarousel()
}

function opacityLucas() {
    document.querySelector(`#active${index}`).setAttribute('style', 'opacity:0.5')
}
// function resetInterval() {
//     clearInterval(interval)
//     clearInterval(intervalOpacity)
//     interval = setInterval(startInterval, 1000)
// }

// setTimeout(resetInterval(), 36000)


function moveCarousel() {
    // Last image set index === 0
    if (index === imagesCollection.length) {
        index = 0
        clearInterval(interval, intervalOpacity)
        interval = setInterval(startInterval, 6000);
        intervalOpacity = setInterval(opa, 6000);

    } else if (index < 0) {
        index = 0
    }

    images.style.transform = `translateX(-${index * 150}px)`
}

// Nav buttons
// function prevSlide() {
//     index--
//     //resetInterval()
//     clearInterval(interval) 
//     moveCarousel()
// }

// function nextSlide() {
//     index++
//     //resetInterval()
//     clearInterval(interval) 
//     moveCarousel()
// }