const videoPlayer = document.getElementById('videoPlayer');
const videoFileInput = document.getElementById('videoFile');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volUpBtn = document.getElementById('volUpBtn');
const volDownBtn = document.getElementById('volDownBtn');
var video = document.getElementById("videoPlayer");
var loadingMsg = document.getElementById("loadingMsg");

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file.type.startsWith('video/')) {
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
  } else {
    alert('Invalid file type. Only video files are allowed.');
  }
}

function handlePlayClick() {
  videoPlayer.play();
}

function handlePauseClick() {
  videoPlayer.pause();
}

function handleVolUpClick() {
  if (videoPlayer.volume < 1) {
    videoPlayer.volume += 0.1;
  }
}

function handleVolDownClick() {
  if (videoPlayer.volume > 0) {
    videoPlayer.volume -= 0.1;
  }
}

function handleVideoLoadStart() {
  loadingMsg.style.display = 'block';
}

function handleVideoCanPlay() {
  loadingMsg.style.display = 'none';
}

videoFileInput.addEventListener('change', handleFileSelect);
playBtn.addEventListener('click', handlePlayClick);
pauseBtn.addEventListener('click', handlePauseClick);
volUpBtn.addEventListener('click', handleVolUpClick);
volDownBtn.addEventListener('click', handleVolDownClick);
videoPlayer.addEventListener('loadstart', handleVideoLoadStart);
videoPlayer.addEventListener('canplay', handleVideoCanPlay);

video.addEventListener('canplaythrough', function() {
  loadingMsg.style.display = "none";
  video.style.display = "block";
});