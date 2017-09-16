/* Get Our Elements */
const player = document.querySelector('.player');
const playf = document.querySelector('webkit-full-screen');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Functions */
function togglePlay() {
  const reproducir = video.paused ? 'play' : 'pause';
  video[reproducir](); //manda llamar al metodo reproducir
}


function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';// si es verdad se pone el triangulo si no las 2 lineas
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const avance = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${avance}%`;
}

/*dependiendo donde se de clic en la barra de progreso
sera donde el video sera retrasao o avanzadoo.
*/
function scrub(e) {
  //progress.offsetWidth nos proporciona el largo de la barra de progreso
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
/*este es un truco para acortarr codigo en el cual primero checha la variable mousedown
  y despues manda el evento a scrub*/
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);