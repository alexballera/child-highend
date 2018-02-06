{
  "name": "planisalud-dev",
  "version": "1.0.0",
  "description": "Constructor Theme Child Planisalud",
  "main": "gulpfile.babel.js",
  "scripts": {
    "lint": "standard",
    "test": "npm run lint",
    "start": "npm run lint & gulp"
  },
  "standard": {
    "parser": "babel-eslint",
    "ignore": [
      "/src/js/vendors",
      "/public/js/vendors"
    ]
  },
  "dependencies": {
    "babel-eslint": "^8.0.1",
    "jquery": "^3.2.1",
    "standard": "^10.0.3"
  },
  "devDependencies": {
    "babel-plugin-transform-regenerator": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babelify": "^7.3.0",
    "browserify": "^14.5.0",
    "del": "^3.0.0",
    "eslint": "^4.9.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-node": "^5.2.1",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-standard": "^3.0.1",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-cache": "^0.5.0",
    "gulp-cssnano": "^2.1.2",
    "gulp-imagemin": "^3.4.0",
    "gulp-notify": "^3.0.0",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^3.1.0",
    "gulp-sass-glob": "^1.0.8",
    "gulp-sass-lint": "^1.3.4",
    "gulp-uglify": "^3.0.0",
    "imagemin-jpegtran": "^5.0.2",
    "imagemin-optipng": "^5.2.1",
    "imagemin-pngquant": "^5.0.1",
    "imagemin-svgo": "^5.2.2",
    "require-dir": "^0.3.2",
    "sass-lint": "^1.12.1",
    "stream-series": "^0.1.1",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/alexballera/constructor-theme-child.git"
  },
  "author": "Alex Ballera <alexballera@gmail.com> (http://alexballera.com)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/alexballera/constructor-theme-child/issues"
  },
  "homepage": "https://github.com/alexballera/constructor-theme-child#readme"
}
