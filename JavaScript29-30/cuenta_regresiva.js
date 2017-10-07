let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
//seleccionamos cualquiera que tenga data-time. 
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  //al seleccionar un nuevo tiempo se elimina el tiemo que estaba decrementando antes.
  clearInterval(countdown);

  const now = Date.now();
  //nsda el tiempo atual  en milisegundos
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
      //cambia los los milisegundos a segundos
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
        //si se detubo elimina esa cuenta regresiva
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
  //cada segundo va a estra mostrando en pantalla los cambios.
}
//funcion creada para mostrarlos segundos restantes mas rapido.
function displayTimeLeft(seconds) {
    //con floor nos devuelve el valor  entero dela division
  const minutes = Math.floor(seconds / 60);
  //toma los segundos restantes y divide entre 60 peroesta ves regresa  el modulo. 
  const remainderSeconds = seconds % 60;
  //despliega el tiempo restante y si remaindereconds es menor a 10 aparecera junto al numero un 0, si es mayor no aparecera nada
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

//se crea una funcion para desplegarr el tiempo en el cual debera terminar la cuenta.
function displayEndTime(timestamp) {
    //toma un valor numerico en milisegundos el cual contiene la fecha del dia actual.
  const end = new Date(timestamp);
  //se pueden acceder a sus propiedades.
  const hour = end.getHours();
  //se haceel ajuste ara que muestre el tiemo en un formato de 12 horas en lugar del de 24.
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  //despliga la hora ajustada y los minutos
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    //pasamos el string de tiempo a entero para  desues pasarla  al contador. 
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
//al dar click en algun boton comienzala cuenta regresivapara dicho tiemo selecciondo.
buttons.forEach(button => button.addEventListener('click', startTimer));
//se toma el valor tecleado en el recuadro en blanco y ese valor es en minutos.
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  //se toma  el valor tecleado
  const mins = this.minutes.value;
  console.log(mins);
  //converrsion a minutos
  timer(mins * 60);
  //se limpia el recuadro
  this.reset();
});