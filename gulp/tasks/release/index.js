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

var gulp = require('../../loader')([
    'release/major',
    'release/minor',
    'release/patch'
]);

// Return null as this module does not contain a task
module.exports = null;