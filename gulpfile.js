var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var gulpIf = require('gulp-if');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function(){
    gulp.src('node_modules/bootstrap/dist/js/**.*')
        .pipe(gulp.dest('js/'));
});

gulp.task('sass', function() {
  return gulp.src('css/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css'))
});

gulp.task('stylescompress', ['sass'], function() {
    gulp.src("css/**/style.css")
    .pipe(rename('style.min.css'))
    .pipe(gulpIf('*style.min.css', cssnano()))
    .pipe(gulp.dest('css/'));
});

gulp.task('bootstrapcompress', ['sass'], function() {
    gulp.src("css/**/bootstrap.css")
    .pipe(rename('bootstrap.min.css'))
    .pipe(gulpIf('*bootstrap.min.css', cssnano()))
    .pipe(gulp.dest('css/'));
});


gulp.task('watch', function(){
  gulp.watch('css/**/*.scss', ['sass','stylescompress','bootstrapcompress']);
});


// Build Sequences
// ---------------

gulp.task('default', function(callback) {
    runSequence(['sass','stylescompress','bootstrapcompress','js'], 'watch'
    )
});

gulp.task('build', function(callback) {
    runSequence(
        'sass',
        'stylescompress',
        'bootstrapcompress',
        'js'
    )
});
