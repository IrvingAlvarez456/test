const nombre = "Irving";

const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"

]

function promedioCorrer(){
    const min = 5;
    const max = 15;

    return Math.round(Math.random() * (max - min) + min) //round redondea al valor entero mas proximo, developer.mozilla.ong 
      
}

let totalKms = 0
const length = dias.length //refactorizando disminuir la cantidad que se utiliza

for (let i=0; i<length;i++){
    const kms = promedioCorrer()
    totalKms += kms
    console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms}`)
}

const promediokms =   totalKms/length
console.log(`En promedio, ${nombre} corrio ${promediokms.toFixed(2)} kms, en la semana`)//al usar el acento oblicuo se hace una interpolacion
// to fixed trunca los decimales mostrando solo 2.