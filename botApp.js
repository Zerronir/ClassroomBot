/**
 * Importamos las librerías que necesitamos para hacer funcionar el proyecto
 * Discord.js -> para poder acceder a Discord con el bot y leer los comandos que le pasamos al bot
 **/

const discord = require('discord.js');
const client = new discord.Client();

// Al iniciar sesión devolvemos un mensaje por la consola dando el ok
client.on('ready', () => {
    console.log(`Registrado como ${client.user.tag}`);
});

/**
 * Aquí creamos una función donde leerá las instrucciones dadas por el usuario, como por ejemplo listar
 * los trabajos pendientes del alumno y en función de la asignatura devolverá un mensaje del profesor de la asignatura
 *
 * Por ejemplo, si la asignatura es Entorno Cliente, el bot contestará con un mensaje del profesor de esa asignatura.
 * @msg --> Es el objeto que contiene nuestro mensaje.
 * @msg.content.author --> Autor del mensaje
 * @msg.content --> Contenido del mensaje
 **/

client.on('message', msg => {
    // Comando para listar una array con todos los comandos y lo que hace cada bot
    if(msg.content.startsWith('!comandos', 0)){
        let coms = ['!tareas --> Lista todas las tareas pendientes', '!ayuda --> Te da un listado de los comandos y como usarlos', '!comentarPrivado --> te permite comentar una tarea de forma privada', '!comentario --> Te permite hacer un comentario público en el muro de la clase'];

        // Creamos un bucle para recorrer la array de comandos disponibles y pintarlos como mensajes
        for (let i = 0; i < coms.length; i++) {
            msg.reply(coms[i]);
        }

    }

    if(msg.content.startsWith('!help', 0) || msg.content.startsWith('!ayuda', 0)){
        msg.reply('Para poder ejecutar los comandos !tareas, !comentarPrivado y !comentar tienes que dar acceso a tu cuenta de google a la api de classroom adjuntando tu correo electrónico en tu mensaje, por ejemplo: << !comentar "Mensaje para la clase." correo@alumno.es >>');
    }

    if(msg.content.startsWith("!tareas", 0)){
        msg.reply("Tienes estas tareas pendientes: ");
    }

    if(msg.content.startsWith("!comentario", 0)){
        // Usamos el método split para poder sacar lo que hay dentro de las comillas como mensaje público para el classroom
        let comentario = msg.content.split('"')[1];
        msg.reply("Mensaje de " + `${msg.author.username}` + " enviado correctamente: " + comentario);
    }

    if(msg.content.startsWith("!comentarPrivado", 0)){
        msg.reply("Mensaje privado enviado");
    }


});




// Creamos una función para que el bot inicie sesión donde le pasaremos el token generado por discord para el bot
client.login('INSERT_TOKEN');