var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    cssGlobbing = require('gulp-css-globbing');

gulp.task('styles', function() {
    return gulp.src('scss/main.scss')
        .pipe(cssGlobbing({
            extensions: ['.css', '.scss']
        }))
        .pipe(rename('app.scss'))
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('public'))
        .pipe(minifycss())
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', ['watch'], function() {

});
