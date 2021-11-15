const play = document.querySelector(".playBtn");
const audio = document.querySelector(".audio audio");
const video = document.querySelector(".video video");
const seasons = document.querySelectorAll(".season");
const durations = document.querySelectorAll(".duration");
let remainingTimeEl = document.querySelector(".time-display")


// Default Audio Duration 
let audioDuration = 120; // 2min

//Play and Pause Audio
play.addEventListener("click", () => {
    checkPlaying(audio);
    update();
});

const checkPlaying = audio => {
    if (audio.paused) {
        audio.play();
        video.play();
        play.src = "./img/pause.svg";
      } else {
        audio.pause();
        video.pause();
        play.src = "./img/play.svg";
      }
      
}


//Change Seasons
// How forEach loop works??????????????????
seasons.forEach((season) => {
    season.addEventListener("click", () => {
        video.src = season.getAttribute("video-src");
        audio.src = season.getAttribute("data-sound");
        video.pause();
        play.src = "./img/play.svg";
        update();
    })
})

// Change Durations
durations.forEach((duration) => {
    duration.addEventListener('click', () => {
        audioDuration = duration.getAttribute("audio-duration");
        console.log(audioDuration);
        update();
    })
})


/* const path = document.querySelector(".track-outline circle");
const remainingTimeEl = document.querySelector(".time-display");

const pathLength = path.getTotalLength();
console.log(pathLength); // 1359

path.style.strokeDasharray = pathLength; */


function update() 
{
    /* let portionPlayed = audio.currentTime / audioDuration ;
    console.log(audio.currentTime);
    let value = -portionPlayed * pathLength ;
    console.log(value);
    path.style.strokeDashoffset = value; */

    // Stop Audio
    if(audio.currentTime >= audioDuration){
        audio.pause(); // if we don't use it the song will never stop
        audio.currentTime = 0;
        play.src = "./img/play.svg";
        video.pause();
        video.currentTime = 0;
    }

    let remainingTimeInSec = audioDuration - audio.currentTime;
    renderRemainingTime(remainingTimeInSec);
 
    if(!audio.paused){
        requestAnimationFrame(update); // LOOP
    }
}

function renderRemainingTime(timeInSec) { 
    let min = Math.floor(timeInSec / 60);
    // console.log(min);
    let sec = Math.floor(timeInSec % 60);
    // console.log(sec);
  
    // IF min/sec is a single digit(ex:9) we add a zero before the digit. (ex: 9 becomes 09)
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
  
    remainingTimeEl.innerHTML = `${min}:${sec}`;
  }
