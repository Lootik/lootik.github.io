var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config');

var vendor = [
    'angular'
];

gulp.task('watch', function () {
    gulp.watch(['./app/**'], ['webpack-app']);
});

gulp.task('webpack-app', function () {
    var config = webpack_config;
    config.entry.vendor = vendor;
    return gulp.src('./app/app.js')
        .pipe(webpack(config))
        .pipe(gulp.dest('./dist'));
});