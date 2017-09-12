const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const paths = {
    src:'src/**/*.js',
    dist:'dist/'
}

gulp.task('src', function(){
    gulp.src(paths.src)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.dist))
})

gulp.task('watch', function () {
    gulp.watch(paths.src, ['src']);
});

gulp.task('default', ['src','watch']);