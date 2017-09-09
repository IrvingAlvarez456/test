new Rect(10,10,100,100)
.addTo(stage)//agregar a la escena
.attr('fillColor', 'blue')
.animate(new KeyframeAnimation('2s', {
/*se le especifica eltiempo que debe esperar para comenzar la animacion
la clase keyframe nos proporciona una manera facil de añadirle una serie de animaciones consecutivas 
hace que el recuadro se mueva hasta la coordenada 1000,1000 y despues regrese al inicio.*/
    from: { x: 0, y: 0},
    '.5%': {x: 300 , y:300},
    to: {x: 0, y: 0}
    }));