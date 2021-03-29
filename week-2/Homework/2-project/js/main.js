//Part 1
// declaracion de las funciones, una por cada color

function changeColorBlue() {
    let colorBgr = document.querySelector('.jumbotron')
    let colorDonateBike = document.querySelector('.buttons > .btn-primary')
    let colorVolunteer = document.querySelector('.btn-secondary')

    colorBgr.style.backgroundColor = '#588fbd'
    colorDonateBike.style.backgroundColor = '#ffa500'
    colorVolunteer.style.backgroundColor = 'black'
    colorVolunteer.style.color = 'white'

}
function changeColorOrange() {
    let colorBgr = document.querySelector('.jumbotron')
    let colorDonateBike = document.querySelector('.buttons > .btn-primary')
    let colorVolunteer = document.querySelector('.btn-secondary')

    colorBgr.style.backgroundColor = '#f0ad4e'
    colorDonateBike.style.backgroundColor = '#5751fd'
    colorVolunteer.style.backgroundColor = 'black#31b0d5'
    colorVolunteer.style.color = 'white'

}
function changeColorGreen() {
    let colorBgr = document.querySelector('.jumbotron')
    let colorDonateBike = document.querySelector('.buttons > .btn-primary')
    let colorVolunteer = document.querySelector('.btn-secondary')

    colorBgr.style.backgroundColor = '#87ca8a'
    colorDonateBike.style.backgroundColor = 'black'
    colorVolunteer.style.backgroundColor = '#8c9c08'
   

}
// Obtencion de los botones 
const blueBtn = document.querySelector('#blueBtn')
const orangeBtn = document.querySelector('#orangeBtn')
const greenBtn = document.querySelector('#greenBtn')

// metodo addEventlistener con callback
blueBtn.addEventListener('click', changeColorBlue)
orangeBtn.addEventListener('click', changeColorOrange)
greenBtn.addEventListener('click', changeColorGreen)


// Part 2
let emailField = document.getElementById('exampleInputEmail1')
let nameField = document.getElementById('example-text-input')
let describeField = document.getElementById('exampleTextarea')

let arr = [emailField, nameField, describeField]

 const isValid = arr.forEach( field => field.value = '')

//funcion que cambia el color de los fields
function checkFields(event) {
    event.preventDefault()
    
    if(emailField.value.length == '0' && !emailField.value.includes('@')) {
        emailField.style.backgroundColor = 'tomato'
    } else { 
        emailField.value = ''
        emailField.style.backgroundColor = 'none'
    }
     
    if (nameField.value.length == '0') {
        nameField.style.backgroundColor = 'tomato'
    } else { 
        nameField.value = ''
        nameField.style.backgroundColor = 'none'
    }
    
    if (describeField.value.length == '0') {
        describeField.style.backgroundColor = 'tomato'
    } else { 
        describeField.value = ''
        describeField.style.backgroundColor = 'none'
    }
    
}

//busqueda del boton submit 
let submitBtn = document.querySelector('.btn.btn-primary.submit')

//al boton submit addEvenlistener que llama la funcion 
submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (emailField.value.length == '0' && nameField.value.length == '0' && describeField.value.length == '0' && !emailField.value.includes("@")) {
        checkFields(event)
        
    } else { 
        emailField.value = ''
        nameField.value = ''
        describeField.value = ''

        emailField.style.backgroundColor = 'none'
        nameField.style.backgroundColor = 'none'
        describeField.style.backgroundColor = 'none'

        alert('Thank you for filling up the form')}
})
