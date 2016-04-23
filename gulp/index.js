var gulp = require('gulp');

module.exports = function (tasks) {
    tasks.forEach(function (name) {
        var module = require('./tasks/' + name);

        if (module) {
            gulp.task(name.replace('/', ':'), module);
        }
    });

    return gulp;
};