require('../utils/requires.js');

/* globals gulp */
/* globals svgSprite */
/* globals replace */
/* globals rename */

const BEGIN_ICON_SET =
      '<link rel="import" href="../../../node_modules/@polymer/' +
      'iron-iconset-svg/iron-iconset-svg.html">\n' +
      '<iron-iconset-svg name="' + config.customIconsName + '" size="24">\n';
const END_ICON_SET = '\n</iron-iconset-svg>';

const DEST_SVG_SET = config.path.srcElements + '/' + config.customIconsName;


// Create a polymer iconset out of svg files
gulp.task('svg:icons', function(callback) {
  return gulp.src(config.path.srcImages + '/**/*.svg')
            .pipe(svgSprite({
              mode: {
                defs: true,
                prefix: '%s',
              },
            }))
            .pipe(replace(/^<.*<defs>/g, BEGIN_ICON_SET + '<defs>'))
            .pipe(replace('</defs></svg>', '</defs></svg>' + END_ICON_SET))
            .pipe(replace('svg--', ''))
            .pipe(rename(config.customIconsName + '.html'))
            .pipe(gulp.dest(DEST_SVG_SET));
});
