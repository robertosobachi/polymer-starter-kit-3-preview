'use strict';

// Include Gulp & tools
const gulp = require('gulp');

// Require all tasks in gulp/tasks, including subfolders
const requireDir = require('require-dir');
requireDir('./gulp/tasks', {recurse: true});

// Load tasks for web-component-tester
// Adds tasks for `gulp test:local` and `gulp test:remote`
// require('web-component-tester').gulp.init(gulp);
