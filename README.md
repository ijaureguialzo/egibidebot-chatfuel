# EgibideBot

Este es un ejemplo sobre cómo crear un servicio basado en Node.js que proporcione contenido dinámico a un bot basado en [Chatfuel](https://chatfuel.com/).

Pasos a seguir:

1. Clonar este repositorio o crear un nuevo proyecto siguiendo los pasos.
2. Publicarlo en [Heroku](https://www.heroku.com/).
3. Conectar el bot al servicio mediante el [plugin JSON](https://help.chatfuel.com/facebook-messenger/plugins/json-plugin/).

## Crear un nuevo proyecto

1. Instalar [Git](https://git-scm.com/).
2. Instalar [Node.js](https://nodejs.org/en/).
3. Crear un nuevo repositorio en [Github](https://github.com/) y clonarlo a una carpeta local.
4. En la carpeta clonada, inicializar Node.js y [Express](http://expressjs.com/es/):
	
	```bash
	npm init
	npm install express --save
	```

5. Crear la carpeta `public` y el fichero `server.js`, como en este proyecto.
6. Confirmar todos los cambios en el repositorio.

## Publicarlo en Heroku

1. Instalar [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Iniciar sesión en línea de comandos: 

	```bash
	heroku login
	```
	
3. En la carpeta de proyecto, crear una nueva aplicación y renombrarla:	

	```bash
	heroku create --region eu
	heroku rename <nombre_de_la_aplicacion>
	```
	
4. Publicar la aplicación en Heroku:	

	```bash
	git push heroku
	```		
