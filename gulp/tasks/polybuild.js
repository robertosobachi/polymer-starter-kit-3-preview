require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals config */
/* globals exec */
/* globals tap */
/* globals polymer */
/* globals buildDirectory */

// Empty gulp task when it doesn't meet a condition.
gulp.task('noop', function(cb) {
  cb();
});

gulp.task('polybuild', (callback) => {

  runSequence(
    'build:prod',
    'clean:browsersync',
    'clean:scss',
    'clean:srcImages',
    config.removeRoboto ? 'clean:roboto' : 'noop',
    callback
  );
});

/**
 * It strips the BrowserSync script tag from the content.
 */
const removeBrowserSync = (file) => {
  let content = file.contents.toString();

  const stringToStrip = '<script async="" ' +
      'src="//localhost:5001/browser-sync/browser-sync-client.js">' +
      '</script></body></html>';

  content = content.replace(stringToStrip, '');

  return content;
}

/**
 * It strips the Roboto link tag from the content.
 */
const removeRoboto = (file) => {
  let content = file.contents.toString();

  // Maybe we should use regex to remove this line in different formats if
  // it changes in the future?
  const stringToStrip = '<link rel="stylesheet" href="https://' +
                        'fonts.googleapis.com/css?family=Roboto+Mono:400,' +
                        '700|Roboto:400,300,300italic,400italic,500,' +
                        '500italic,700,700italic" crossorigin="anonymous">';

  content = content.replace(stringToStrip, '');

  return content;
}

/**
 * Gulp task to execute `polymer build`.
 */
gulp.task('build:prod', (callback) => {
  const buildMessage =
      'Building production.. it won\'t be 2 seconds.. please wait..';

  log(fontCyanBold(buildMessage));
  exec('polymer build', function (err, stdout, stderr) {
    callback(err);
  });
});

/**
 * Gulp task to remove the roboto font calls.
 */
gulp.task('clean:roboto', (callback) => {
  return gulp.src(buildDirectory + '/**/*.html')
      .pipe(tap((file) => {
        file.contents = new Buffer(removeRoboto(file));
      }))
      .pipe(gulp.dest(buildDirectory));
});

/**
 * Gulp task to remove the browser-sync tag from the build versions.
 */
gulp.task('clean:browsersync', (callback) => {
  return gulp.src(buildDirectory + '/**/index.html')
      .pipe(tap((file) => {
        file.contents = new Buffer(removeBrowserSync(file));
      }))
      .pipe(gulp.dest(buildDirectory));
});

/**
 * Gulp task to remove the image sources.
 */
gulp.task('clean:srcImages', (callback) => {
  let buildDirectories = [];
  let build;

  let finalPartPath = '/' + config.path.srcImages;

  for (build of polymer.builds) {
    buildDirectories.push(buildDirectory + '/' + build.name + finalPartPath);
  }

  return del(buildDirectories, { dot: true });
});

/**
 * Gulp task to remove the CSS files from the build directories.
 */
gulp.task('clean:scss', (callback) => {
  let buildDirectories = [];
  let build;

  let finalPartPath = '/' + config.path.srcElements + '/**/*.scss';
  let finalPartStylesPath = '/' + config.path.srcGlobalSass;

  for (build of polymer.builds) {
    buildDirectories.push(buildDirectory + '/' + build.name + finalPartPath);
    buildDirectories.push(
        buildDirectory + '/' + build.name + finalPartStylesPath);
  }

  return del(buildDirectories, { dot: true });
});
