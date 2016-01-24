var gulp = require('gulp');
var exec = require('child_process').exec;
var watch = require('gulp-watch');

gulp.task('intern', function (cb) {
    exec('./node_modules/.bin/intern-client config=tests/intern', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {
    watch('**/*.js', function() {
        exec('./node_modules/.bin/intern-client config=tests/intern', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
        });
    });
}); 
