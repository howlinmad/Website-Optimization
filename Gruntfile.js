module.exports = function(grunt) {
    
    //confrigure main project settings
    grunt.initConfig({
       //basic settings and info about plugins
        pkg: grunt.file.readJSON('package.JSON'),
        
        //Name of plugin (plugin name without the "grunt-contrib")
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        critical: {
            test: {
                options: {
                    base: './',
                    css: [
                        'css/style.css'                        
                    ],
                    width: 1950,
                    height: 850
                },
                src: 'index.html',
                dest: 'test/generated/index-critical.html'
            }
        }, 
         htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'test/generated/index-min.html': 'index.html',
                }
            }
        }
    });
    
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-imagemin');    
    grunt.loadNpmTasks('grunt-critical');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    
    //Do the task
    grunt.registerTask('default', ['imagemin','critical','htmlmin']);
    
}

//imagemin minified 5 images and saved 98.79KB