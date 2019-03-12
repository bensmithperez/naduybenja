// Autor: Benjamin Smith
// Archivo: pantalla.js

var slideshowPantalla = setInterval(function(){
  avanzarFoto(1);
}, 5000);

var fotoActual = 0;

function avanzarFoto(n) {
  clearInterval(slideshowPantalla);
  mostrarFoto(fotoActual += n);
  slideshowPantalla = setInterval(function(){
    avanzarFoto(1);
  }, 5000);
}

function mostrarFoto(n){
  var i;
  var fotos = document.getElementsByClassName("imagenPantalla");
  if (n > fotos.length) {fotoActual = 1}    
  if (n < 1) {fotoActual = fotos.length}
  for (i = 0; i < fotos.length; i++) {
      fotos[i].style.display = "none";  
  }
  // console.log("actual: " + fotoActual);
  fotos[fotoActual-1].style.display = "block";
}