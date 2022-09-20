let thumbnails = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');

let buttonRight = document.getElementById('slide-right');
let buttonLeft = document.getElementById('slide-left');

buttonLeft.addEventListener('click', function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
// alert(maxScrollLeft);
// alert("Left Scroll:" + slider.scrollLeft);

//AUTO PLAY THE SLIDER 
function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}
let play = setInterval(autoPlay, 50);

// PAUSE THE SLIDE ON HOVER
for (var i=0; i < thumbnails.length; i++){

thumbnails[i].addEventListener('mouseover', function() {
    clearInterval(play);
});

thumbnails[i].addEventListener('mouseout', function() {
    return play = setInterval(autoPlay, 50);
});
}
// // Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
// const prevBtn = document.querySelector(".prev")
// const nextBtn = document.querySelector(".next")

// prevBtn.addEventListener("click", prevSlide)
// nextBtn.addEventListener("click", nextSlide)

// Utility vars
let index = 0

// Set interval
let interval = setInterval(startInterval, 8000);
let intervalOpacity = setInterval(opa, 8000);

setTimeout(active1opacity, 8000)

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
        setTimeout(opacityLucas, 10900)
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
        interval = setInterval(startInterval, 8000);
        intervalOpacity = setInterval(opa, 8000);

    } else if (index < 0) {
        index = 0
    }

    imagesCollection.style.transform = `translateX(-${index * 150}px)`
}
