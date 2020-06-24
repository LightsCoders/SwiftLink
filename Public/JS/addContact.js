//var boton = document.getElementById("boton");
//var personas = document.getElementById("personass");

function agregarPersona(){
    //alert("hola");
    var contacto = document.createElement("li");
    var nombre = document.createElement("a");
    var imagen = document.createElement("img");
    
    contacto.setAttribute("class", "personElement");
    imagen.setAttribute("src","./ICON/user.png");
    
    
    //nombre.textContent= "Nuevo";
    contacto.appendChild(imagen);
    nombre.textContent="Nuevo"; 
    contacto.appendChild(nombre);
    personass.appendChild(contacto);
}

function agregarGrupo(){
    //alert("hola");
    var contacto = document.createElement("li");
    var nombre = document.createElement("a");
    var imagen = document.createElement("img");
    
    contacto.setAttribute("class", "groupElement");
    imagen.setAttribute("src","./ICON/grupo2.png");
    
    
    //nombre.textContent= "Nuevo";
    contacto.appendChild(imagen);
    nombre.textContent="Nuevo"; 
    contacto.appendChild(nombre);
    gruposs.appendChild(contacto);
}