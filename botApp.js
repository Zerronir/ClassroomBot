/**
 * Importamos las librerías que necesitamos para hacer funcionar el proyecto
 * Discord.js -> para poder acceder a Discord con el bot y leer los comandos que le pasamos al bot
 *
 * */

const discord = require('discord.js');
const client = new discord.Client();

// Al iniciar sesión devolvemos un mensaje por la consola dando el ok
client.on('ready', () => {
    console.log(`Registrado como ${client.user.tag}`);
});

/*
* Aquí creamos una función donde leerá las instrucciones dadas por el usuario, como por ejemplo listar
* los trabajos pendientes del alumno y en función de la asignatura devolverá un mensaje del profesor de la asignatura
*
* Por ejemplo, si la asignatura es Entorno Cliente, el bot contestará con un mensaje del profesor de esa asignatura.
*
* */

client.on('message', msg => {
    // Comando para listar una array con todos los comandos y lo que hace cada bot
    if(msg.content === '!comandos'){
        let coms = ['!tareas --> Lista todas las tareas pendientes', '!ayuda --> Te da un listado de los comandos y como usarlos', '!comentarPrivado --> te permite comentar una tarea de forma privada', '!comentar --> Te permite hacer un comentario público en el muro de la clase'];

        // Creamos un bucle para recorrer la array de comandos disponibles y pintarlos como mensajes
        for (let i = 0; i < coms.length; i++) {
            msg.reply(coms[i]);
        }

    }
});




// Creamos una función para que el bot inicie sesión donde le pasaremos el token generado por discord para el bot
client.login('INSERT_TOKEN');