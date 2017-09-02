// si la palabra termina en ar: se le quitan los ultimos 2 caracteres
function platsom(str){
    let translation = str;

    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0,-2)// recorre todo el string y despues se regresa 2 posiciones
    }
    


// si la palabra incia con z: se le añade los caracteresres "pe" al final de la palabra+
if(str.toLowerCase().startsWith('z')){
    translation += 'pe'
}

// si la palabra traducida tiene 10 o mas letras se debe partir a la  mitad y unir con un guion.
if(str.toLowerCase().length >=10){
let a = Math.round(str.length/2);
let b = str.substring(a,str.length);
let c = str.slice(0,a);

translation = c + "-"+ b;

}

// si la palabra orignal es un palindromo nnguna de las anteriores reglas funciona, y se  devuelvela palabra 
// intercalando entre mayusculas y minusculas. 

const reverse = (str) => str.split('').reverse().join('');//split separa por comilla simple
function minMay(str){
    const  l = str.length;
    let  translation = "";
    let  capitalize = true;
    for(let i = o; i < l; i++){
const char = str.charAt(i);
translation += capitalize ? char.toUpperCase(): char.toLowerCase;
    }
    return translation;
}


if(str= reversa(stre)){
return miMay(str);
}

return translation;
}
console.log(platsom("programar"));
console.log(platsom("zorro"));
console.log(platsom("estoesunaputalocura"));




