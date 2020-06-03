const socket = io();//Generando la coneccion, dependiendo de los casos habra que poner el dominio como parametro.Por defecto intenta conectarse al host que sirve a la página.. Esta variable sera utilizada como puente entre el servifor y el cliente ya sea para enviar eventos y demas.
const teclaEnter = 13;

var texto = document.getElementById('textMsj');

var send = document.getElementById('sendMsj');

var mensajes = document.getElementById('conversacion');

send.addEventListener('click',()=>{
   if(texto.value != ""){
        socket.emit('mensaje', texto.value);
        texto.value="";
    }
});

texto.addEventListener('keydown',(tecla)=>{
    if(texto.value != "" && tecla.keyCode == teclaEnter) {
        socket.emit('mensaje', texto.value);
        texto.value="";
    }
});

socket.on('respuestaMsj', (dato) => {
    mensajes.innerHTML += `<p class="enviado">${dato}<p>`;
});

socket.on('respuestaMsj2', (dato) => {
    mensajes.innerHTML += `<p class="recibido">${dato}<p>`;
})

//icon-enviado
//icon