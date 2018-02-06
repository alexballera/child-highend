import gulp from 'gulp'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'gulp-cssnano'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import sassLint from 'gulp-sass-lint'
import 'sass-lint'

var onError = err => {
  notify.onError({
    title: 'Error',
    message: '<%= error %>'
  })(err)
  this.emit('end')
}

var plumberOptions = {
  errorHandler: onError
}

var autoprefixerOptions = {
  browsers: ['last 2 versions']
}
var sassOptions = {
  includePaths: [
  ]
  // outputStyle: 'compressed'
}

gulp.task('styles', () => {
  return gulp.src('./src/main.scss')
    .pipe(sassGlob())
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(plumber(plumberOptions))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./build'))
    .pipe(cssnano())
    .pipe(gulp.dest('./public'))
})
