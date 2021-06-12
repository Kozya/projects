const playBtn = document.getElementById('play-control');
const stopBtn = document.getElementById('stop-control');
const pauseBtn = document.getElementById('pause-control');
const nextBtn = document.getElementById('next-control');
const prevBtn = document.getElementById('prev-control');

const title = document.getElementById('title');
const time = document.getElementById('time');
const poster = document.getElementById('poster');
const playlist = document.getElementById('playlist');
const audio = new Audio();

let currentIndex = 0;
let currentDuration = SONGS[currentIndex].duration;
let min = 0;
let sec = 0;
let interval;

playBtn.addEventListener("click", btnPlay);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
pauseBtn.addEventListener("click",pause);
stopBtn.addEventListener("click",stop);
playlist.addEventListener("click", clickPlay)

function creatList(container, data) {
  
    for (let i = 0; i < SONGS.length; i++) {
        let item = SONGS[i];  
        playlist.innerHTML += `
            <li data-index=${i} data-src = ${item.src} class="playlist__item">
                <div class="song-img"><img class="img" src=${item.poster}></div>
                <p class="song-name"> ${item.name} </p>
                <span class="song-duration"> ${item.duration}</span>
            </li>`;         
    }   
}

function clickPlay (event) {
    let target = event.target.closest('[data-index]');
    let index = target.dataset.index;
        title.innerHTML = SONGS[index].name;
        poster.setAttribute("src",SONGS[index].poster);
    let src = SONGS[index].src;
    min = 0;
    sec = 0;
    stopInterval();
    startTimer()
    playAudio(src);
};

function btnPlay(){
    audio.src = SONGS[currentIndex].src;
    title.innerHTML = SONGS[currentIndex].name;
    poster.setAttribute("src",SONGS[currentIndex].poster);
    audio.play();
    min = 0;
    sec = 0;
    stopInterval();
    startTimer();

};

function playAudio(src) {
    audio.src = src;
    audio.play();
};

function next() {
    if (currentIndex + 1 === SONGS.length){
        currentIndex = 0;
        btnPlay();
    }
    else {
        currentIndex++;
        btnPlay();
    }
 
};

function prev() {
    if (currentIndex - 1 === -1){
        currentIndex = SONGS.length -1;
        btnPlay();
    }
    else {
        currentIndex--;
        btnPlay();
    }
};

function pause() {
        audio.pause();
        stopInterval();
};

function stop() {

};

function startTimer() {
        interval = setInterval(timer, 1000);
};

function stopInterval(){
        clearInterval(interval);
};

function timer() {
    sec++;
    if (time.textContent === SONGS[currentIndex].duration) {
        next();
    }
    if (sec >= 60) {
        min++;
        sec = 0;
    }
    
    if (sec < 10) { 
        if (min < 10) {
                time.innerHTML = `0${min}:0${sec}`;
            } 
        else {
                time.innerHTML = `${min}:0${sec}`;
            }
    }
    else {
         if (min < 10) {
                time.innerHTML = `0${min}:${sec}`;
            } 
        else {
                time.innerHTML = `${min}:${sec}`;
            }
    }
}

console.log(time.textContent);

console.log(currentDuration);

creatList(playlist, SONGS);    