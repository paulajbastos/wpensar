module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			main:{
				files:{
					'./app/main.css' : './app/styles/sass/main.scss'
				}
			}
		},
		watch: {
			styles: {
				files: [
					'./app/styles/sass/**/*.scss',
					'./app/styles/sass/**/*.sass'
				],
				tasks: ['sass:main', 'postcss:main'],
				//MUST INSTALL LIVE RELOAD ADDON FOR YOUR BROWSER
				options: {
					livereload: true
				}
			}
		},
		jshint: {
			options: {
				browser: true
			},
			all: ['Gruntfile.js']
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')(
					{
						browsers: ['last 8 versions', 'ie 9'],
						map:true
					})
				]
			},
			main: {
				files: {
					'./app/main.css': './app/main.css'
				}
			}
		},
		//https://www.npmjs.com/package/grunt-spritesmith
		//http://www.imagemagick.org/script/binary-releases.php#windows
		//http://www.martinilab.com/grunt_spritesmith_for_retina_sprite_sheets
		sprite:{
	      all: {
	        src: 'Assets/images/tratadas/skillslogos/*.png',
	        dest: 'public/images/sprite.png',
	        destCss: 'app/styles/sass/tools/_sprites.scss'
	      }
	    },
		copy: {
            angular: {
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/angular/',
                    src: ['angular.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            },
            angularNgstorage: {
            	//https://github.com/oblador/angular-scroll
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/ngstorage/',
                    src: ['ngstorage.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            },
            angularMocks: {
            	//https://github.com/oblador/angular-scroll
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/angular-mocks/',
                    src: ['angular-mocks.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            },
            angularroute: {
            	//https://github.com/oblador/angular-scroll
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/angular-route/',
                    src: ['angular-route.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            }, 
            angularuirouter: {
            	//https://github.com/oblador/angular-scroll
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/angular-ui-router/release/',
                    src: ['angular-ui-router.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            },
            angularmessages: {
            	//https://github.com/oblador/angular-scroll
                files: [
                {
                    expand: true,
                    cwd: 'bower_components/angular-messages/',
                    src: ['angular-messages.js'],
                    dest: 'app/scripts/frworks/angular/'
                }]
            },
            build: {
		        files: [
					{ expand: true, flatten: true, src: './app/fonts/*', dest: './build/fonts/' },
					{ expand: true, flatten: true, src: './app/main.css.map', dest: './build/' },
					{ expand: true, flatten: true, src: './app/views/*', dest: './build/views/' }
				]
		      }
        },
        concat: { 
	      	js: {
		        src: [
					'app/scripts/frworks/angular/angular.js',
					'app/scripts/frworks/angular/ngstorage.js',
					'app/scripts/frworks/angular/angular-mocks.js',
					'app/scripts/frworks/angular/angular-xeditable.js',
					'app/scripts/frworks/angular/angular-route.js',
					'app/scripts/frworks/angular/angular-ui-router.js',
					'app/scripts/frworks/angular/angular-messages.js'
		        ],
		        dest: 'app/scripts/vendors.js'
		    }
	      	,build: {
	        	src: [
		          	'app/scripts/vendors.js',
		          	'app/scripts/app.js',
		          	'app/scripts/app-services/main-service.js',
		          	'app/scripts/app-services/authentication.service.js',
		          	'app/scripts/app-services/service.js',
		          	'app/scripts/app-controllers/app-controller.js',
		          	'app/scripts/app-controllers/login-controller.js',
		          	'app/scripts/app-controllers/produtosController.js',
		          	'app/scripts/app-controllers/produtoController.js',
		          	'app/scripts/app-controllers/comprasController.js',
		          	'app/scripts/app-directives/app-page-titles.js',
		          	'app/scripts/app-helpers/fake-backend.js'
		        ],
	        	dest: 'build/main.js'
	      	}
	    }, 
        cssmin: {
	      	minify: {
	        	options: {
	          	banner: '/*\n' +
	                  'Theme Name: querotrabalharnawpensar\n' +
	                  'Description: Desafio Front-End\n' +
	                  'Author: Paula Junqueira Bastos\n' +
	                  'Theme URI: http://dev.paulajbastos.com/desafios/querotrabalharnawpensar\n' +
	                  'Author URI: http://paulajbastos.com\n' +
	                  'Version: 1.0\n' +
	                  'License: GNU General Public License v2 or later\n' +
	                  'License URI: http://www.gnu.org/licenses/gpl-2.0.html\n' +
	                  //'Tags: white, orange, purple\n' +
	                  'Text Domain: Desafio Front-End\n' +
	                  '*/\n'
	        	}
	        	,files: {
	          		'build/main.css': ['app/main.css']
	        	}
	      	}
	    }
	    ,uglify: {
	        assets: {
	        	src: 'app/main.js',
	          	dest: 'build/main.js'
	        }
	    },
       	imagemin: {
	      dist: {
	        //funciona
	        files: [{  
	            expand: true,
	            cwd: 'app/images/',
	            src: ['**/*.{png,jpg,gif}'],
	            dest: 'build/images/'
	        }]
	      }
	    },
	    htmlmin: {
	      	dist: {
	        	options: {
	              	removeComments: true,
	              	collapseWhitespace: true
	            },  
	            files: {
	            	'build/index.html': 'app/index.html'
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	////https://www.npmjs.com/package/grunt-spritesmith
	//http://www.imagemagick.org/script/binary-releases.php#windows
	//http://www.martinilab.com/grunt_spritesmith_for_retina_sprite_sheets
	grunt.loadNpmTasks('grunt-spritesmith');

	grunt.registerTask('prodcss', ['watch:styles']);
	grunt.registerTask('prodjs', ['watch:scripts']);

	// GENERAL Task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('copyfiles', ['copy:angularroute']); //angularscroll

	grunt.registerTask('build', ['sass','htmlmin', 'concat', 'cssmin', 'copy:build']);
	//grunt.registerTask('build', ['sass','htmlmin', 'concat', 'uglify', 'cssmin', 'copy:build']);
};