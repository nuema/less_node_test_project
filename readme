/**********************************************

	Proyecto para probar features de less
	AUTHOR: Natalia Uema
	MAIL: natalia.uema@gmail.com

**********************************************/

COMO CORRER ESTE PROYECTO EN NODE:
$ node server.js
http://localhost:8081/index.html



COMMENTS
	Por qué less:
		Porque Forza esta hecho en less y actualmente tiene pocas diferencias con sass en cuanto al lenguaje


	Install: 
		En el server:  
			- npm install less less-plugin-clean-css -g  o  apt-get install node-less node-clean-css 
			- para compilar comprimido lessc --compress <source>.less <target>.min.css
				
		En el proyecto: 
			- npm i less less-plugin-clean-css grunt-contrib-less --save-dev
	
	CONFIG: {
			- paths: [path1, path2] } 
			- source map
			- Rootpath
			- Relatives urls
			- files en grunt-contrib-less se configuran según grunt.
			- URL arguments (para caches, no en grunt-contrib-less) 

	Compilers: grunt-contrib-less, gulp-less, koala (visual)
	Lenguaje: Se pueden aplicar condicionales, funciones y mixins, permite extend e include
	Compresion: https://github.com/less/less-plugin-clean-css https://github.com/jakubpawlowicz/clean-css
	Apps: http://koala-app.com/ Koala, compila y comprime  


* SOBRE VERSION Y BUILD: {version.minorVersion.revision}

	$ grunt version::patch 
Aumenta el numero de revision

	$ grunt version::minor
Aumenta el numero de minorVer

	$ grunt version::major
Aumenta el numero de version

	$ grunt buildnumber
Aumenta el numero de build



DOC:

-Interesante: import directives (reference, inline, less, css, once, multiple, optional)
http://lesscss.org/features/#import-options

-Configuracion para compilar usando grunt
https://github.com/gruntjs/grunt-contrib-less

-Less
http://lesscss.org/

-Clean css
https://github.com/less/less-plugin-clean-css

-SourceMaps
http://blog.teamtreehouse.com/introduction-source-maps