const path = require('path');//Obteniendo la ruta actual (donde estan los archivos) y almacenandola en la variable 'path'.

const express = require('express');//Haciendole saber que voy a utilizar este modulo o dependencia que descargué previamente.

const app = express();//Inicializandolo(Esta funcion devuelve un objeto el cual va a contener la configuracion de sevidor).

app.set('port', process.env.port || 3000); //Diciendole al servidor que utilice el puerto de la url actual o alguno que tenga el sistema configurado en caso de que este alojado localmente, en caso de que no se consiga dicho puerto se le asignará el puerto 3000.

app.use(express.static(path.join(__dirname, 'public')));//__dirname es una constante de Node js que contiene la ruta actual.path.join esta concatenando la ruta actual + 'public', para que entre a la carpeta public y de esta manera el navegador entrará a esa carpeta y buscara el index.html


const server = app.listen(app.get('port'), () => {console.log('server on port',app.get('port'));
}); //Inicializando el servidor(poniendolo en modo de eschucha por decirlo de alguna manera), y ejecuta una funcion que tira por consola el numero del puerto que esta utilizando el servidor (esta funcion es para probar).


const socketIO = require('socket.io').listen(server);//Esto recibe la configuracion del servidor la cual almacenamos anteriormente en la variable app pero le damos la configuracion luego de que esté el servidor inicializado por eso tiene 'server' como parametro. Se puede poner 'socketIO(server)'.



//Implementando Websockets

socketIO.on('connection', (socket) => {
    console.log('nueva coneccion de:', socket.id);
    
    socket.on('mensaje', (texto) => {
       /*socket.emit: se envia solo para ti
       socketIO.sockets: se envia para todos
       socket.broadcast.emit: se envia para todos menos para ti*/
        socket.emit('respuestaMsj',texto);
        socket.broadcast.emit('respuestaMsj2', texto);
    })
});// Cuando alguien se conecte ejecutará una funcion que tira por consola el msj 'nueva coneccion'. Con el parametro socket estamos reciviendo la inf del socket del cliente que está definido en chat.js mediante el cual hacemos la coneccion.
