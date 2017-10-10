require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals config */
/* globals modified */
/* globals imagemin */
/* globals webp */

const SRC_IMAGES = [
  config.path.srcImages + '/**/*.png',
  config.path.srcImages + '/**/*.jpg',
  config.path.srcImages + '/**/*.jpeg',
  config.path.srcImages + '/**/*.ico'
];

gulp.task('images', (callback) => {

  runSequence(
    'dev:images',
    'dev:webp',
    callback
  );
});

gulp.task('dev:webp', (callback) => {

 return gulp.src(SRC_IMAGES)
            .pipe(modified('dev:webp'))
            .pipe(webp())
            .pipe(gulp.dest(config.path.destImages))
});

gulp.task('dev:images', (callback) => {

 return gulp.src(SRC_IMAGES)
            .pipe(modified('dev:images'))
            .pipe(imagemin({
              progressive: true,
              interlaced: true
            }))
            .pipe(gulp.dest(config.path.destImages))
});
