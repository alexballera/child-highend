import gulp from 'gulp'
require('require-dir')('./tasks')

// Build
gulp.task('build', ['copy'], () => {
  gulp.start('styles', 'scripts', 'images', 'php')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('watch', 'build')
})
