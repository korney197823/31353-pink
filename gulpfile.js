"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require("gulp-imagemin");
var clean = require('gulp-contrib-clean');
var cache = require('gulp-cache');


gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true
    })))
    .pipe(gulp.dest("build/img"));
});

gulp.task('clear', function() {
  return cache.clearAll();
});


gulp.task('clean', function() {
  gulp.src('build/')
    .pipe(clean());
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
      ,
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });
  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task('build', ['clean', 'images', 'style'], function() {
  var buildCss = gulp.src([
      'css/style.css',
      'css/normalize.css',
      'css/style.min.css'])
    .pipe(gulp.dest('build/css'));
  var buildFonts = gulp.src('fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
  var buildJs = gulp.src('js/**/*')
    .pipe(gulp.dest('build/js'));
  var buildHtml = gulp.src('*.html')
    .pipe(gulp.dest('build'));
});
