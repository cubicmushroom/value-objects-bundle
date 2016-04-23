/**
 * Adds the release/* tasks
 *
 * Each task does the following...
 * 1. Bumps the version number in the composer.json, package.json and bower.json files
 *
 * gulp patch   -
 * gulp feature -
 * gulp release -
 */

var gulp = require('../..')([
    'release/major',
    'release/minor',
    'release/patch'
]);

module.exports = null;
