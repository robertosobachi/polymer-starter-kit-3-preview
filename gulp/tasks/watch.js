require('../utils/requires.js');

/* globals gulp */
/* globals config */

gulp.task('watch:reload', (cb) => {
  browserSync.reload();
  cb();
});

gulp.task('watch', () => {
  browserSync({
    port: 5001,
    host: 'localhost',
    open: false,
    debugInfo: false,
    logLevel: 'silent'
  });


  // Watches for scss files changes.
  gulp.watch([config.path.srcElements + '/**/*.scss'],
             ['sass:lint', 'sass:elements', 'watch:reload']);

  gulp.watch([config.path.srcGlobalSass + '/**/*.scss'],
             ['sass:lint', 'sass:styles', 'watch:reload']);

  // Watches for html file changes.
  gulp.watch([config.path.srcElements + '/**/*.js'], ['watch:reload']);

  gulp.watch([config.path.srcImages + '/**/*.png',
              config.path.srcImages + '/**/*.jpg',
              config.path.srcImages + '/**/*.jpeg'],
             ['images', 'watch:reload']);

  gulp.watch([config.path.srcImages + '/**/*.svg'],
        ['svg:icons', 'watch:reload']);
});
