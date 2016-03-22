'use strict';

module.exports = function (grunt) {

	var mailStylesFile = "styles.css";
	
	grunt.initConfig({
		less: {
			default: {
				options: {
					//roothpath: "/home/nuema/desa/less_test_project" 
					paths: ["assets/less"]
					,compress: true
					//,sourceMap: true
				}
				,plugins: [
					new (require('less-plugin-clean-css'))({ })
				]
				,files: {
					// Todos los archivos .less de la carpeta assets se crean comprimidos en styles.min.css
					"assets/css/style.min.css":"assets/less/*.less" 
					//'tmp/concat.css': ['test/fixtures/style.less', 'test/fixtures/style2.less', 'test/fixtures/style3.less']
					//Todos los bootstraps
					//,"assets/css/bootstrap.min.css":"assets/less/bootstrap/*.less"
				}
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

// Lila config
