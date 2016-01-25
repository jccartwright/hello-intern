var gulp = require('gulp');
var exec = require('child_process').exec;
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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

gulp.task('serve', function() {
    //TODO why can't this call the scripts task?
    gulp.watch(['js/**/*.js'], function() {
        return gulp.src('js/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'))

    });

    browserSync({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['**/*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: '.'}, reload);
});

