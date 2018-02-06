import gulp from 'gulp'

gulp.task('php', () => {
  gulp.src('./src/**/*.php')
    .pipe(gulp.dest('./public'))
})
