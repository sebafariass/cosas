//Función IIFE 
const panoramas = (() => {
 
    let musica_privada = () => {    //funcion _privada para musica
        resultado.innerHTML = ` <p>Sugerencia Música<p> 
        <div class= "video-responsive"><iframe width="100%" height="315"  src="https://www.youtube.com/embed/WfWXvUWqkp0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>
        `;
    };
    
    let cine_privada = () => {    //funcion _privada para cine
        resultado.innerHTML = ` <p>Sugerencia Cine<p>
        <div class= "video-responsive"><iframe width="100%" height="315" src="https://www.youtube.com/embed/h6onhP7LUHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>
        `;
    };
    
    let comida_privada = () => { //funcion _privada para comida
        resultado.innerHTML = ` <p>Sugerencia Comida<p>
        <img src="img/photo.jpg"  class="imgSelect">
        `;
    c
    };
    return {
        //Función pública panorama musica
        salida_musica: () => {
            musica_privada();
        },
        
        salida_comida: () => { //Función pública panorama comida
            comida_privada();
        },

        salida_cine: () => { //Función pública panorama cine
            cine_privada();
        },
        
      

    };
})();

export default panoramas;