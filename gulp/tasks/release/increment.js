/**
 * Adds the release/* tasks
 *
 * Each task does the following...
 * 1. Bumps the version number in the composer.json, package.json and bower.json files
 * 2.
 */

var gulp = require('gulp'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter'),
    tag_version = require('gulp-tag-version');

module.exports = function (importance) {
    // get all the files to bump version in
    return gulp.src(['./composer.json', './package.json', './bower.json'])

        // bump the version number in those files
        .pipe(bump({type: importance}))

        // save it back to filesystem
        .pipe(gulp.dest('./'))

        // commit the changed version number
        // .pipe(git.commit('Releasing new ' + importance + ' version'))

        // read only one file to get the version number
        // .pipe(filter('composer.json'))

        // **tag it in the repository**
        .pipe(tag_version());
};