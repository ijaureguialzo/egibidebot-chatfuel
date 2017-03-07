/**
 * Ejemplo de servicio basado en Node.js para crear contenido dinámico para un bot.
 *
 */

// Puerto en el que escucha el servidor Node.js (lo obtiene de una variable de entorno y si no existe, el 3000)
const PORT = process.env.PORT || 3000;

// Importamos el framework Express y lo inicializamos
var express = require("express");
var app = express();

// El contenido de la carpeta public se muestra en la raíz del servidor
app.use(express.static(__dirname + "/public"));

/*
 GET /plazo/:fecha

 Ruta que calcula el número de días que faltan para una fecha

 Si el servidor se está ejecutando localmente:

 http://localhost:3000/plazo/2017-01-31T23:59:59.000Z

 Devuelve un objeto JSON con el formato:

 [{"text":"Faltan 59 días..."}]
 */
app.get("/plazo/:fecha", function (req, res) {

    // Obtener la fecha que llega en la URL
    var fecha_entrega = new Date(req.params.fecha);
    var ahora = new Date();

    // Algo no ha ido bien
    if (!fecha_entrega) {
        return res.status(400).send();
    }

    // http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
    var oneDay = 24 * 60 * 60 * 1000;
    var dias = Math.round(Math.abs((ahora.getTime() - fecha_entrega.getTime()) / (oneDay)));

    // Crear el objeto con la respuesta
    var respuesta = [
        {
            text: "Faltan " + dias + " días...",
        }
    ];

    // Devolver el objeto en formato JSON
    res.json(respuesta);
});

app.get("/nota/:dni", function (req, res) {

    // Obtener el DNI
    var dni = req.params.dni;

    // Algo no ha ido bien
    if (!dni) {
        return res.status(400).send();
    }

    // Crear el objeto con la respuesta
    var respuesta = {
        "messages": [
            {
                "attachment":{
                    "type":"template",
                    "payload":{
                        "template_type":"generic",
                        "elements":[
                            {
                                "title":"Excelente",
                                "image_url":"https://egibidebot.herokuapp.com/images/1.png",
                                "subtitle":"La nota del boletín es: "+process.env[dni],
                            }
                        ]
                    }
                }
            }
        ]
    };

    // Devolver el objeto en formato JSON
    res.json(respuesta);
});


// Arrancar el servidor y dejarlo a la espera
app.listen(PORT, function () {
    console.log("Servidor Express escuchando en el puerto " + PORT + "...");
});
