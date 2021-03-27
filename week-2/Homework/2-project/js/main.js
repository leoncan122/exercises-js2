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

const blueBtn = document.querySelector('#blueBtn')
const orangeBtn = document.querySelector('#orangeBtn')
const greenBtn = document.querySelector('#greenBtn')


blueBtn.addEventListener('click', changeColorBlue)
orangeBtn.addEventListener('click', changeColorOrange)
greenBtn.addEventListener('click', changeColorGreen)
