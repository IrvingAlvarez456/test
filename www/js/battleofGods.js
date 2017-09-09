let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;

const goukuSigueVivo = () => vidaGoku > 0

const ambosisguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

const amboosMuertos = () => vidaGoku === 0 && vidaSuperman === 0

const calculargolpe = () => Math.round(Math.random() * (MAX_POWER-MIN_POWER) + MIN_POWER);

while(ambosisguenVivos()){
    round++;
    console.log(`Round ${round}`);
  
    const golpeGoku = calculargolpe();
    const golpesuperman = calculargolpe();
  
    if(golpeGoku >  golpesuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
        vidaSuperman -= golpeGoku;
        console.log(`Superman queda en ${vidaSuperman} de vida`);
    }else
      console.log(`Superman ataca a Goku con un golpe de ${golpeGoku}`);
      vidaGoku -= golpesuperman;
      console.log(`Goku queda en ${vidaSuperman} de vida`); 
       

}
   

  if(goukuSigueVivo()){
    console.log(`Goku gano la pelea, su vida es de. ${vidaGoku}`);
}else{
    console.log(`Superman gano la pelea, su vida es de. ${vidaSuperman}`);
}

