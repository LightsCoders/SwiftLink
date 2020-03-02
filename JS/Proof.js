//var boton = document.getElementById("boton");
var personas = document.getElementById("personass");

function agregar(){
    //alert("hola");
    var contacto = document.createElement("li");
    var nombre = document.createElement("a");
    var imagen = document.createElement("img");
    
    imagen.setAttribute("src","./ICON/user.png");
    
    
    //nombre.textContent= "Nuevo";
    contacto.appendChild(nombre);
    nombre.appendChild(imagen);
    nombre.innerHTML+="Nuevo"; personass.appendChild(contacto);
    
}