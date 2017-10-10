require('../utils/requires.js');

/* globals gulp */
/* globals config */
/* globals del */
/* globals buildDirectory */

// Okay, so first thing we do is clear the build directory
gulp.task('clean', function(callback) {

  let dirs = [
    // The generated syles.
    config.path.srcElements + '/**/*-styles.html',
    // The custom icons.
    config.path.srcElements + '/' + config.customIconsName,
    // The build directory.
    buildDirectory,
    // The optimised images.
    config.path.destImages,
    // The global styles directory.
    config.path.destGlobalCss
  ];

  return del(dirs, { dot: true });
});
