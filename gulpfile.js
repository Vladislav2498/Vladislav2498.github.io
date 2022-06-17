import gulp from 'gulp';
import gulpSass from "gulp-sass";
import nodeSass from "sass";
const sass = gulpSass(nodeSass);
import BS from 'browser-sync'
const browserSync = BS.create();
const { src, dest, task, watch, series, parallel } = gulp;

const convertCss = () => src('src/styles/**/*')
    .pipe(sass())
    .pipe(dest('dist/styles'));

const startWatching = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('src/styles/**/*').on('all', series(convertCss, browserSync.reload));
}

task('dev', startWatching);
task('build', convertCss);
