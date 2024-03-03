// get all the elements
const player = document.querySelector('.player');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const video = player.querySelector('.viewer');
const ranges = player.querySelectorAll('.player__slider');
// const controller = player.querySelector(
// )

// a button to play and pause
function togglePlay(){

    const method = video.paused ? 'play' : 'pause';
    video[method]();

}

function updateBtn (){
    const icon = this.paused ? '►' : '❚ ❚';
    document.getElementById('playBtn').innerHTML = icon;

}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);


// skip button
console.log(video);
console.log(skipButtons);

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime);
}

skipButtons.forEach(skipBtn => skipBtn.addEventListener('click', skip));

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

function scrub(){
    const scrubTime = (e.offsetX / progress/offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
// let mousedown = false;
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

    // change while mouse move.
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

video.addEventListener('timeUpdate', handleProgress);

progress.addEventListener('timeupdate', handleProgress);



// get in and out of full screen