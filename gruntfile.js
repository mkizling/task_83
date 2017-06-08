module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
			sass: {
  				options: {
  					style: 'expanderd'
  				},
  				files: {
  					'css/main.css': 'sass/main.sass'
  				}

  			},
  			jshint: {
  				all: ['js/*.js']
  			},
			autoprefixer: {
				options: {

				},
				dist: {
					src: 'css/style.css',
					dest: 'css/styleprefixed.css'
				}
			},
			watch: {
				autoprefixer: {
					files: 'css/style.css',
					tasks: ['autoprefixer']
				},
				sass: {
					files: 'sass/style.sass',
					tasks: ['sass']
				}
			},
			imagemin: {
				dynamic: {
					options: {
						optimizationLevel: 7
					},
					files: 
					[
						{
							expand: true,
							cwd:'images/',
							src: ['**/*.{jpg,png,gif}', '!build/**/*.{jpg,png,gif}'],
							dest: 'images/build'
						}
					]
				}
			}
	});



	grunt.loadNpmTasks("grunt-autoprefixer");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-imagemin");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-jshint");



	grunt.registerTask("default", ['autoprefixer', 'watch', 'imagemin', 'sass', 'jshint']);
};