window.onscroll = function(){myFunction()};
var secciones= document.getElementsByTagName("section");
var fechas = document.getElementsByClassName("fecha");

function myFunction(){
if(window.scrollY>=secciones[0].offsetTop){
eliminarClase();
}
if(window.scrollY>=secciones[1].offsetTop - 100){
    eliminarClase();
    fechas[0].classList.add("seleccionado")
    }
    if(window.scrollY>=secciones[2].offsetTop - 100){
        eliminarClase();
        fechas[1].classList.add("seleccionado")
        }
        if(window.scrollY>=secciones[3].offsetTop - 100){
            eliminarClase();
            fechas[2].classList.add("seleccionado")
            }
            if(window.scrollY>=secciones[4].offsetTop - 100){
                eliminarClase();
                fechas[3].classList.add("seleccionado")
                }
}

function eliminarClase(){

for(var i=0; i < fechas.length; i++){
fechas[i].classList.remove("seleccionado");

}

}