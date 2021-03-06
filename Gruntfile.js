module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/controller.js',
                dest: 'server/public/assets/scripts/controllers/controller.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
              expand: true,
                cwd: 'node_modules',
                src: "bootstrap/dist/css/bootstrap.min.css",
                dest: "server/public/vendors/"
            },
            fontAwesomeCss: {
              expand: true,
                cwd: 'node_modules',
                src: "font-awesome/css/font-awesome.min.css",
                dest: "server/public/vendors"
            },
            fontAwesomeFonts: {
              expand: true,
                cwd: 'node_modules',
                src: "font-awesome/fonts/*",
                dest: "server/public/vendors"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: "styles/style.css",
                "dest": "server/public/assets/"
            },
            html: {
                expand: true,
                cwd: 'client',
                src: [
                    'views/index.html'
                ],
                "dest": "server/public/assets"
            },
            htmlRoutes: {
                expand: true,
                cwd: 'client',
                src: [
                    'views/routes/aboutme.html',
                    'views/routes/home.html',
                    'views/routes/projects.html'
                ],
                "dest": "server/public/assets"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};