/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1.
 document.querySelectorAll("p")
 //2.
document.querySelector("div")
//3.
document.querySelectorAll("#jumbotron-text")
//4.
document.querySelector(".primary-content")
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
function alertMessagge (event) {
    event.preventDefault();
    alert("Thanks for visiting Bikes for Refugees!")
}

const alertButton = document.getElementById('alertBtn');

alertButton.addEventListener('click', alertMessagge)


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const body = document.querySelector("body")

function changeBackground (event, color) {
    event.preventDefault();
 
    body.style.backgroundColor = color;
    
}

const colorBtn = document.getElementById('bgrChangeBtn')

//colorBtn.addEventListener('click', event => {
//          changeBackground(event, 'black')
         
//      })

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
function addP (event, texto) {

    event.preventDefault();

    const conteiner = document.querySelector("#mainArticles")
    const paragraph = document.createElement("p")
    texto = document.querySelector(".form-control")
    conteiner.appendChild(paragraph)
    paragraph.innerText = texto.value
    texto.value = ""

}

const addText = document.querySelector("#addTextBtn")

addText.addEventListener('click', addP)

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
function largerLinks (event) {
    event.preventDefault();
    let links = document.querySelectorAll('a');
    links.forEach(elem => {
        let fontSize = Number.parseInt(elem.style.fontSize)
        fontSize += 1
        elem.style.fontSize = fontSize + 'em'
    })
}

const largerLinksBtn = document.querySelector("#largerLinksBtn")

largerLinksBtn.addEventListener('click', largerLinks)



/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const addBtn = document.querySelector('#addArticleBtn')

addBtn.addEventListener('click', addP)
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colors = ['tomato', 'pink', 'orange', 'red', 'green', 'cyan']



colorBtn.addEventListener('click', (event) => {
    let currentColor = body.style.backgroundColor
    let currentColorIndex = colors.indexOf(currentColor)
    currentColorIndex++

    if ( currentColorIndex === colors.length) {
        currentColorIndex = 0
    }
changeBackground(event, colors[currentColorIndex])

})