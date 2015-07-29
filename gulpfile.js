var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync  = require('browser-sync');

gulp.task('sass',function(){
  return sass('./test/sass')
    .on('error',function(err){
      console.error('Error',err.message);
    })
    .pipe(gulp.dest('./test/css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));

})

gulp.task('browser-sync',['sass'],function(){
  browserSync.init({
    server: './test'
  });
  gulp.watch('./test/sass/*.scss',['sass']);
  gulp.watch('./test/*.html').on('change',browserSync.reload);
})