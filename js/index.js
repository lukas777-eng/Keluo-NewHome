// // Grab DOM elements
// const images = document.querySelector(".images")
// const imagesCollection = document.querySelectorAll(".image")
// const prevBtn = document.querySelector(".prev")
// const nextBtn = document.querySelector(".next")

// prevBtn.addEventListener("click", prevSlide)
// nextBtn.addEventListener("click", nextSlide)

// // Utility vars
// let index = 0

// // Set interval
// let interval = setInterval(startInterval, 2000)

// function startInterval() {
//     index++
//     moveCarousel()
// }

// function resetInterval() {
//     clearInterval(interval)
//     interval = setInterval(startInterval, 500)
// }

// function moveCarousel() {
//     // Last image
//     if (index > imagesCollection.length -1) {
//         index = 0
//     } else if (index < 0) {
//         index = imagesCollection.length -1
//     }

//     images.style.transform = `translateX(-${index * 800}px)`
// }

// // Nav buttons
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

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://sheet.best/api/sheets/1478aa5e-74b2-48b7-8ee7-d393fc078987', {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": form.nombre.value,
                "Email": form.email.value,
            })
    });
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    openModal.checked = false
})

/////modal

const openModal = document.querySelector('.input-checkbox-sale');
const modal = document.querySelector('.modal');
const closeModal =  document.querySelector('.modal__close');

openModal.addEventListener('change', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

// // Grab DOM elements
// const images2 = document.querySelector(".images2")
// const imagesCollection2 = document.querySelectorAll(".image2")
// const prevBtn2 = document.querySelector(".prev2")
// const nextBtn2 = document.querySelector(".next2")

// prevBtn2.addEventListener("click", prevSlide2)
// nextBtn2.addEventListener("click", nextSlide2)

// // Utility vars
// let index2 = 0

// // Set interval
// let interval2 = setInterval2(startInterval2, 2000)

// function startInterval2() {
//     index2++
//     moveCarousel2()
// }

// function resetInterval2() {
//     clearInterval2(interval2)
//     interval2 = setInterval2(startInterval2, 500)
// }

// function moveCarousel2() {
//     // Last image
//     if (index2 > imagesCollection2.length -1) {
//         index2 = 0
//     } else if (index < 0) {
//         index2 = imagesCollection2.length -1
//     }

//     images2.style.transform = `translateX(-${index2 * 800}px)`
// }

// // Nav buttons
// function prevSlide2() {
//     index2--
//     //resetInterval()
//     clearInterval2(interval2) 
//     moveCarousel2()
// }

// function nextSlide2() {
//     index2++
//     //resetInterval()
//     clearInterval2(interval2) 
//     moveCarousel2()
// }
  
function hide() {

}

  
function show() {
    
}