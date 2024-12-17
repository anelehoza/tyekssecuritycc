//const express = require('express')
const {src, dest, series, parallel, watch} = require('gulp')
const minifyCSS = require('gulp-minify-css')
const nodemon = require('gulp-nodemon')
const Uglify = require('gulp-uglify')


 function ejsTask() {
     return src ('app/*.ejs')
     .pipe(dest('app'))
 }

function cssTask() {
 return src('app/css/**/*.css')
 .pipe(minifyCSS())
 .pipe(dest('app'))
}

function jsTask() {
    return src('dist/public/js/**/*.js')
       .pipe(Uglify())
       .pipe(dest('app'))
}

function startserver(done) {
   nodemon({
        port: 3000,
        script: 'app/server.js',
        ext: 'js ejs css',
        env:{
            NODE_ENV: 'production'
        } ,
        done: done()
   })
   .on('restart', function() {
    console.log('restarted')
})
}

// function webserverTask() {
//     return src('app')
//         .pipe(webserver({
//             port: 3000,
//             liverelaod: true,
//             directoryListing: true,
//             open: true
//         }))
// }
function watchTask() {
    watch(['views/*.ejs','dist/public/css/**/*.css', 'dist/public/js/**/*.js', 'app/server.js'],
        parallel(ejsTask, cssTask , jsTask, startserver))
}



exports.default = series(
    parallel(ejsTask, cssTask , jsTask, startserver), 

    // watchTask
)
exports.build = series(cssTask, jsTask, startserver)