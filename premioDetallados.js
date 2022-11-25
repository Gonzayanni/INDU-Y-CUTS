// variables
const verPremios=document.querySelector(".premios");
const contenedorPremios=document.querySelector(".premios-detallados");
const botonCerrar=document.querySelector(".boton-cerrar");


// event listeners

verPremios.addEventListener("click",verPremiosFuncion);
botonCerrar.addEventListener("click",cerrarPremiosFuncion);
contenedorPremios.addEventListener("click",cerrarPremiosFuncion);


// functions





function cerrarPremiosFuncion(e){
    console.log(e.target)
    if(e.target===contenedorPremios ||e.target===botonCerrar){ 
        contenedorPremios.classList.remove("show-premios");
        
    }
}

function verPremiosFuncion(){
    contenedorPremios.classList.add("show-premios")
}
