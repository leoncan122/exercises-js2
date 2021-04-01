/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/
//1. Hecho!
//2. Hecho!
let save = document.querySelector('#save');
let lat = document.querySelector('#lat');
let long = document.querySelector('#long');

let url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

//3. Hecho!
save.addEventListener('click', (event) => {
    event.preventDefault();
    const body = document.querySelector('body');
    
    fetch (url)

    .then((response) => response.json())
    .then(data => {
        const h3 = document.createElement('h3');
        body.appendChild(h3);
        h3.innerText = 'el data.main.temp no me funciona'
    })

})