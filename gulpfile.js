import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);
// import htmlmin from "gulp-htmlmin";
import concat from "gulp-concat";
import terser from "gulp-terser";
import cleancss from "gulp-clean-css";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync"

const bS = browserSync.create();

// export const htmlMin = () => gulp.src("./src/*.html")
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('./dist'))

export const css = () => gulp.src("./src/**/*.scss")
    .pipe(sass())
    .pipe(concat('styles.min.css'))
    .pipe(cleancss())
    .pipe(gulp.dest('./dist'))

export const js = () => gulp.src("./src/**/*.js")
    .pipe(concat('script.min.js'))
    .pipe(terser())
    .pipe(gulp.dest('./dist'))

export const minImage = () => gulp.src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))

export const build = gulp.parallel(css, js, minImage)

export const dev = () => {
    bS.init({
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('./src/**/*', gulp.series(build, (done) => {
        bS.reload()
        done();
    }));
}
