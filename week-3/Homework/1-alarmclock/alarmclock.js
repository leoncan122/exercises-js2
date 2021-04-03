let id = -1
function setAlarm() {
  clearInterval(id)
  
  const set = document.getElementById('set');
  const stop = document.getElementsById('')
  
  let seconds = document.getElementById('alarmSet').value;

  let timeValue = document.getElementById('timeRemaining')
  let index = seconds

  id = setInterval(function() {
    if (index === 0 ){
        playAlarm();
        clearInterval(id);
    }
    else {
        index -= 1;
        timeValue.innerHTML = `Time Remaining: 00:${index}`;
      }
      
    },1000)
    
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
