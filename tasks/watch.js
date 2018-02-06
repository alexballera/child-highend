import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.scss', ['styles'])
  gulp.watch('./src/videos/**/*.*', ['images'])
  gulp.watch('./src/**/*.php', ['php'])
  gulp.watch([
    './src/main.js',
    './src/js/lib/**/*.js'
  ], ['scripts'])
})
