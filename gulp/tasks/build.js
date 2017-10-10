require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals fontYellowBold */
/* globals config */
/* globals del */
/* globals buildDirectory */
/* globals isDevBuild */

let buildLabel;

const buildDone = function(err) {
  if (!err) {

    log(fontYellowBold('Finished building (' + getIsDevBuild() + ')'));

    return;
  }
};

const getIsDevBuild = () => {
  return (isDevBuild) ? 'Development' : 'Production';
};

gulp.task('default', function(cb) {

  isDevBuild = true;
  log(fontYellowBold('Building (' + getIsDevBuild() + ')'));

  runSequence(
    'build:app',
    'watch',
    'build:dev',
    buildDone
  );
});

gulp.task('build', function(callback) {

  isDevBuild = false;
  log(fontYellowBold('Building (' + getIsDevBuild() + ')'));

  runSequence(
    'build:app',
    'polybuild',
    buildDone
  );
});

gulp.task('build:app', function(cb) {

  runSequence(
    'clean',
    'sass:elements',
    'sass:styles',
    'svg:icons',
    'lint',
    'images',
    cb
  );
});
