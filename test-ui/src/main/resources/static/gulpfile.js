const gulp = require('gulp'),
	  minifyCss = require('gulp-minify-css'),
	  uglify = require('gulp-uglify');

const requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default', ['browser-sync'], function () {
    
});


gulp.task('minify-css', function (){
	 gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./css-raiz'));
});


gulp.task('minify-js', function (){
	 gulp.src('./app/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app/js-min'));
});
