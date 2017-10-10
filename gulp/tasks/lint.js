require('../utils/requires.js');

/* globals gulp */
/* globals runSequence */
/* globals config */
/* globals scssLint */

const ELEMENTS_SASS = config.path.srcElements + '/**/*.scss';
const STYLES_SASS = config.path.srcGlobalSass + '/**/*.scss';

gulp.task('lint', (cb) => {
  runSequence(
    'sass:lint',
    cb
  );
});

gulp.task('sass:lint', () => {
 gulp.src([ELEMENTS_SASS, STYLES_SASS])
     .pipe(modified('sass:lint'))
     .pipe(scssLint({'config': '.scsslintrc.yml'}));
});

