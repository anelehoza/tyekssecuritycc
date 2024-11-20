// const gulp = require('gulp');
// const watch = require('gulp-watch');
// const sass = require('gulp-sass')(require('node-sass'));
// const browserSync = require('browser-sync').create();

// function generateCss() {
//     return gulp.src('./scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./dist/public/css'))
// }

// function watchFiles(){
//     watch('sass/**.scss', generateCss)
// }
// exports.watch= watchFiles

 const {src, dest} = require('gulp')
 const { series, parallel} = require('gulp')
 
 function streamTask() {
     return src('*.js')
     .pipe(dest('build'))
 }

// function clean(cb) {
//     // body omitted
//     cb();
//   }
  
//   function css(cb) {
//     // body omitted
//     cb();
//   }
  
//   function javascript(cb) {
//     // body omitted
//     cb();
//   }
  
//   exports.build = series(clean, parallel(css, javascript));
  
  
 exports.default = streamTask
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
// ...
gulp.task('server', () => {
  nodemon({
    script: 'server.js'
  });
});
