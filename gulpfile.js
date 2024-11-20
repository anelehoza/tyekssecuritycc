const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

 gulp.task('sass', function(){
     return gulp.src(['dist/scss/*.scss'])
     .pipe(sass())
     .pipe(gulp.dest('dist/css'))
     .pipe(browserSync.stream())
 })

 //watch & serv
 gulp.task('serve',['sass'], function(){
     browserSync.init({
         server:'./dist'
     })

     gulp.watch(['dist/scss/*.scss'], ['sass']);
     gulp.watch(['dist/*html']).on('change', browserSync.reload)
 })

 gulp.task('default', ['serve'])
