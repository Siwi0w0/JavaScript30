// get all the elements
const player = document.querySelector('.player');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const video = player.querySelector('.viewer');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenIcon = player.querySelector('.icon');

// a button to play and pause
function togglePlay(){

    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateBtn (){
    const icon = this.paused ? '►' : '❚ ❚';
    document.getElementById('playBtn').innerHTML = icon;

}



// skip button
console.log(video);
console.log(skipButtons);

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime);
}


// range update
console.log(ranges)
function handleRangeUpdate(){
    console.log(this.name, this.value);
    video[this.name] = this.value;
}

// handle progress
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    console.log(percent);
    progressBar.style.flexBasis =  `${percent}%`
}

// quickly navigate by dragging a slider or timeline.
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)

video.addEventListener('mousemove', (e)=> mousedown && handleProgress(e))

skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

// change while mouse move.
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// get in and out of full screen

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Enter") {
        toggleFullScreen();
      }
    },
    false,
  );