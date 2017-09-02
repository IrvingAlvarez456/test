var base = 5;
var altura = 7;
var area = base * altura;
console.log("El area de mi rectangulo es igual: "+ area);

var baset = 10;
var alturat = 5;
var areat = (baset * alturat)/2;
console.log("el area del triangulo es igual: "+areat);
"resultado-----"
"el area del triangulo es igual: 25"

var radio = 6;
var pi = Math.PI;
var areac = pi*(Math.pow(radio,2));
console.log("El area del circulo es igual: "+areac); 
"resultado-----"
"El area del circulo es igual: 113.09733552923255"

var radioe = 5;
var pie = Math.PI;
var vol = (4/3)*(pie*Math.pow(radioe,3));
console.log("El volumen de la esfera es igual: "+vol);
"resultado-----"
"El volumen de la esfera es igual: 523.5987755982987"

var nombre = "Irving";
function Mostrar_saludo(){
console.log("Hola "+ nombre);
}

Mostrar_saludo();

var nom = "Alonso";

function saludar(){
    if(true){
      var nom = "Eric";
    }
    console.log("hola "+ nom);
}

function saludar10(){
    let i=0;
    for( i;i<10; i++){
     console.log(`Hola ${nom}`);
    }
    console.log(`Elvalor de i es  ${i}`);
} 