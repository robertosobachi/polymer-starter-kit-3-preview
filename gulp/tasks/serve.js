/* globals gulp */
/* globals fontCyanBold */
/* globals config */
/* globals exec */

gulp.task('build:dev', (callback) => {

  let spawn = require('child_process').spawn;
  let ls = spawn('polymer', ['serve', '--npm', '--port', 'config.port']);

  ls.stdout.on('data', function (data) {
    log(fontCyanBold(data.toString()));

    return callback();
  });

  ls.stderr.on('data', function (data) {
    console.log('Error: ' + data.toString());

    return callback();
  });

  ls.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());

    return callback();
  });

});
