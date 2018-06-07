const gulp = require('gulp');
const annotate = require('gulp-ng-annotate');

gulp.task('annotate', () => {
    gulp.src('main.js')
        .pipe(annotate())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    gulp.src('main.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'annotate'], () => {

})