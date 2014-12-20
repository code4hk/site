var lr = require('tiny-lr');
var gulp = require('gulp');
var gulputil = require('gulp-util');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var less = require('gulp-less');
var bower = require('gulp-bower');
var deploy = require('gulp-gh-pages');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');

server = lr();

var dist = './dist';
var publicFolder = 'app';
gulp.task('bower', function() {
  bower()
    .pipe(gulp.dest('app/lib/'));

});


var filesToMove = [
  '/img/*',
  '/locales/*',
  '/partials/*'
];


gulp.task('usemin', function() {
  gulp.src(publicFolder + '/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify()]
        // in this case css will be only concatenated (like css: ['concat']).
    }))
    .pipe(gulp.dest(dist));
});


gulp.task('build', ['bower', 'usemin'], function() {

  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest(dist + '/css/'));

  gulp.src(filesToMove, {
      base: publicFolder
    })
    .pipe(gulp.dest(dist + '/img/'));

});

gulp.task('default', ['bower', 'listen'], function() {
  gulp.src('app/*')
    .pipe(watch())
    .pipe(livereload(server));

  gulp.src('less/*.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('app/css/'))
    .pipe(livereload(server));
});


gulp.task('listen', function(next) {
  server.listen(35729, function(err) {
    if (err) return console.error(err);
    next();
  });
});

var deployOptions = {
  remoteUrl: "git@github.com:code4hk/site.git",
  origin: "upstream"
};

gulp.task('deploy', ['build', 'usemin'], function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy(deployOptions));
});
