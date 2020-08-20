import panoramas from './app'

// Uso addEventListener evento click

boton1.addEventListener('click', function () { // ejecuta función  muestra en HTML  resultado de función IIFE 
    
    
    panoramas.salida_musica(); // valor salida_musica
})

boton2.addEventListener('click', function () {
    
    panoramas.salida_cine(); //valor salida_cine
})

boton3.addEventListener('click', function () {
   
    panoramas.salida_comida(); //valor salida_comida
})