let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('scss', () => {
    return gulp.src('src/components/**/*.scss')
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', () => {
    gulp.watch('src/components/**/*.scss', gulp.parallel('scss'));
})