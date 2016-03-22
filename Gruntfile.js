'use strict';

module.exports = function (grunt) {

	var mailStylesFile = "styles.css";
	
	grunt.initConfig({
		dev: {
			default: {
				options: {
					variables: {
						
					}
				}
			}
		}
		,less: {
			default: {
				options: {
					//roothpath:
					paths: ["assets/less"]
                    ,sourceMap: true
                    ,compress: true
                    ,sourceMapURL: "styles.min.css.map"
                    ,outputSourceFiles: true //Mete los less en el mapa y no los referencia
				}
				,plugins: [
					new (require('less-plugin-clean-css'))({ })
				]
                ,files: [{
                     src: "assets/less/main.less"
                   , dest: "assets/css/styles.min.css"
                }]
			}
		}
		,version: {
			//options : {}
			default: {
				src: ['package.json', 'version.json']
			}

		}
		,buildnumber: {
			default: {
				options: {
					"field": "build"
				}
				,src: ['version.json']
			}

		}
	});	

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-build-number');
	
	grunt.registerTask ('default', ['less', 'version::minor', 'buildnumber']);
};

