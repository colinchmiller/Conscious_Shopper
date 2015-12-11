module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/*.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            admin: {
                src: 'client/scripts/login.js',
                dest: 'server/public/assets/scripts/admin.min.js'
            },
            controller1: {
                src: 'client/scripts/controllers/ContactFormController.js',
                dest: 'server/public/assets/scripts/controllers/ContactFormController.min.js'
            },
                map: {
                src: 'client/scripts/map.js',
                dest: 'server/public/assets/scripts/map.min.js'
            }

        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    //Copied down manually
                ],
                "dest": "server/public/vendors/"
            },

            html: {
                expand: true,
                cwd: "client",
                src: "views/*.html",
                dest: "server/public/assets/"
            },

            style: {
                expand: true,
                cwd: "client",
                src: 'styles/*.css',
                dest: 'server/public/assets/'
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};