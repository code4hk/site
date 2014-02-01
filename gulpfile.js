var lr = require('tiny-lr');
var gulp = require('gulp');
var gulputil = require('gulp-util');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');

server = lr();

gulp.task('default', function(){
  // place code for your default task here
});

gulp.task('reload', ['listen'], function() {
    gulp.src('app/*.html')
        .pipe(watch())
        .pipe(livereload(server));
});

gulp.task('listen', function(next) {
    server.listen(35729, function(err) {
        if (err) return console.error(err);
        next();
    });
});
