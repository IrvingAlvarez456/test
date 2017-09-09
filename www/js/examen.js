var amigoax = new Object(100);
var amigoay = new Object(50);


var amigobx = new Object(50);
var amigoby = new Object(-3);

distancia(amigoax,amigoay,amigobx,amigoby);

function distancia(xa,ya,xb,yb){
let x1 = xa;
let x2 = xb;
let y1 = ya;
let y2 = yb;

distanciaamigos = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

return `la distancia entre amigos es de ${distanciaamigos}`

}


