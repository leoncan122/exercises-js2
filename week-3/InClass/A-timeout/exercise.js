/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

  let backgroundText = document.querySelector('#main')
  setTimeout(function(){ backgroundText.style.backgroundColor = "tomato" }, 2000)
  
let colors = ['blue', 'pink', 'orange']
let index = 0 
setTimeout ( function() {
   backgroundText.style.backgroundColor = "tomato"
   setInterval(function(){
      if (index >= colors.length){
         index = 0
      }
      index++ // el setInterval necesita aumentar el index porque aqui funcion comoun iterador!!
      backgroundText.style.backgroundColor = colors[index]
     }, 2000)
}, 2000)



 


