const gulp = require('gulp');
const sass = require('gulp-sass');
const nunjucks = require('gulp-nunjucks');
const prettify = require('gulp-html-prettify');
const bourborn = require('bourbon').includePaths;

gulp.task ('sass', function() {
  return gulp.src('src/scss/pages/*.scss') //source file
    .pipe(sass()) //Converts Sass to CSS with gulp-sass
    .pipe (gulp.dest('dist/assets/css'));
});

gulp.task('nunjucks', function() {
  return gulp.src('src/templates/*.html')
        .pipe(nunjucks.compile())
        .pipe(prettify({indent_char: ' ', indent_size: 2}))
        .pipe(gulp.dest('dist/views'));
});

gulp.task ('scss', function() {
  return gulp.src('node_modules/bootstrap/scss/*.scss')
    .pipe(sass())
    .pipe (gulp.dest('dist/assets/css'));
});

gulp.task('bootstrap', function() {
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('jquery', function() {
  return gulp.src('node_modules/bootstrap/node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('tether', function() {
  return gulp.src('node_modules/bootstrap/node_modules/tether/dist/js/tether.js')
        .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default' , ['sass','nunjucks','scss','bootstrap','jquery','tether']);
