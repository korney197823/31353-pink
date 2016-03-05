/**
 * Created by Denis on 05.03.2016.
 */
var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("pink/scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("pink/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("pink/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
