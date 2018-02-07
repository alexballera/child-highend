import gulp from 'gulp'
import notify from 'gulp-notify'

gulp.task('php', () => {
  gulp.src('./src/**/*.php')
    .pipe(gulp.dest('./public'))
    .pipe(notify('PHP Files Changed!'))
})
