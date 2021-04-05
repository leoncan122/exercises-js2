
let img1 = `./images/imagen5.jpg`
let img2 = './images/imagen2.jpg'
let img3 = './images/imagen3.jpg'
let img4 = './images/imagen4.png'
let img5 = './images/imagen1.png'

let images = [img1, img2, img3, img4, img5];
let index = 0

const startBtn = document.querySelector('#start')
const backwardBtn = document.querySelector('#backward')
const stopBtn =document.querySelector('#stop')
const backBtn = document.querySelector('#back')
const forwardBtn = document.querySelector('#forward')
const img = document.querySelector('#imagen')

let interval = -1    

startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(() => {
        updateImageForward()
    }, 4000)
    
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)

})

forwardBtn.addEventListener('click', updateImageForward)

backwardBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval (() => {
        updateImageBack ()
    }, 4000)
} )

backBtn.addEventListener('click', () => {
    updateImageBack()
} )

function updateImageForward () {
    index++
    if (index == images.length) {
        index = 0
    }
    img.src = images[index];
}

function updateImageBack () {
    index--
    if (index  < 0) {
        index = images.length - 1
    }
    img.src = images[index];
}
