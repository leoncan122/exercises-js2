function displayPics (img){
    
     let body = document.querySelector('body')
     
     body.style.backgroundImage.innerHTML = 'url("./images/fondo-diapositivas.jpg")'
   
     let divContenedor = document.createElement('div');
     divContenedor.style.innerText = 'hola'
     divContenedor.style.backgroundColor = 'black'
     divContenedor.style.width = '400px'
     divContenedor.style.backgroundImage = img

     body.appendChild(divContenedor);

}
//document.getElementById('start').addEventListener('click', (event)=> {console.log('hola')})
const start = document.querySelector('#submit')

let img1 = './images/imagen1'
let img2 = './images/imagen2'
let img3 = './images/imagen3'
let img4 = './images/imagen4'
let img5 = './images/imagen5'

let images = [img1, img2, img3, img4, img5];


start.addEventListener('click', (event) => {
    event.preventDefault();
   
    images.forEach(img => {
        displayPics(img)
    })
})
