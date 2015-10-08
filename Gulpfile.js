var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');

gulp.task('default', ['watch']);

gulp.task('watch', function() {
 gulp.watch('app/assets/javascripts/*.js', ['lint']);
});


gulp.task('lint', function(){
 return gulp.src('app/assets/javascripts/**/*.js')
   .pipe(cache('linting'))
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'));
});