const {src, dest, series, parallel, watch} = require('gulp')
const minifyCSS = require('gulp-minify-css')
const Uglify = require('gulp-uglify')


 function ejsTask() {
     return src ('views/*.ejs')
     .pipe(dest('app'))
 }

function cssTask() {
 return src('dist/public/css/**/*.css')
 .pipe(minifyCSS())
 .pipe(dest('app'))
}

function jsTask() {
    return src('dist/public/js/**/*.js')
       .pipe(Uglify())
       .pipe(dest('app'))
}

function watchTask() {
    watch(['views/*.ejs','dist/public/css/**/*.css', 'dist/public/js/**/*.js'],
        parallel(ejsTask, cssTask , jsTask))
}

exports.default = series(
    parallel(ejsTask, cssTask , jsTask),
    watchTask
)
exports.build = series(cssTask, jsTask)