var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config');
var httpServer = require('http-server');

var vendor = [
    'angular',
    'angular-material',
    'angular-animate',
    'angular-ui-router'
];
gulp.task('watch', ['webpack-app'], function () {
    gulp.watch(['./app/**'], ['webpack-app']);
});

gulp.task('webpack-app', function () {
    var config = webpack_config;
    config.entry.vendor = vendor;
    return gulp.src('./app/app.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('./dist'));
});
//Needed for local Wikipedia calls
gulp.task('serve', function () {
    var server = httpServer.createServer();
    server.listen(80, '0.0.0.0');
});