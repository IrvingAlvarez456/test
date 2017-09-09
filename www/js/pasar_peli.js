var confirmacion = new  Boolean();
function pasar_peli(edad,papas){
    const edadcomp = edad;
    confirmacion = !Boolean(papas);
      if(edadcomp >= 17){
    return `Que disfrutes la pelicula`;
    }  

    if(edadcomp <=16 && confirmacion !==  true){
      return `Tu edad es ${edadcomp} pero es estas acompañado de tus papas, disfruta la pelicula`
    }else{   
        return `Tu edad es ${edadcomp} y no vienes con tus papas`
    }
}
   
console.log(pasar_peli(18));
console.log(pasar_peli(16,true));
console.log(pasar_peli(13,false));
    


