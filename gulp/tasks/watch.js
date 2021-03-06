var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var config = require('../config');

gulp.task('watch', ['build'], function() {
  livereload.listen();

  watch(config.source + '/styles/**/*.less', function() {
    gulp.start('styles');
  });

  watch(config.source + '/scripts/**/*.js', function() {
    gulp.start('scripts');
  });

  watch([
    config.source + '/*.html',
    config.source + '/images/**/*.{png,gif,jpg,jpeg,svg}',
    config.source + '/fonts/**/*',
    config.source + '/videos/**/*'
  ], function() {
    gulp.start('copy');
  });

  watch(config.source + '/templates/**/*.jade', function() {
    gulp.start('templates');
  });

  watch(config.source + '/images/**/*.{png,gif,jpg,jpeg,svg}', function() {
    gulp.start('images');
  });
});
