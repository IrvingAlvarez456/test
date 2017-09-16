let numStars = 7;
let width = 500;
let height = 500;


let stars = (function (){
 let stars = [];
 for(let i = 0;i<numStars;i++){
     let h = i * 360 / numStars;
     stars[i] = star.clone().attr({
         //  hsl define un modelo de color en función. hexadecimal
         // h regresa un color 
         fillColor: 'hsl('+ h + ',100%,50%)',//el 100% es la sombra  del color
         x: width/2,
         y: height/2
     });
 }
 return stars;
 //un vertice con 5 puntas.
}(new Star(width/2, height/2, 1, 5)));

//cantidad de layers en la escena
stage.lenght(14);

let i = 0;
stage.on(0, function (){
    let  star = stars[];
    star.attr({
        scaleX: 1,
        scaleY: 1,
        opacity: 1
    }).addTo(stage).animate(14 * numStars, {
        scaleX: width * 3,
        scaleY: height * 3,
        opacity: 0
    },{isTimeLineBound: false});
    i = (i + 1) % numStars;
    stage.removeChild(star [i]);
});