const gulp = require('gulp');
const bs = require('browser-sync').create();

const port = 5000;
const target = "localhost:8081";

gulp.task('browser-sync', () => {
    bs.init({
        port: port,
        proxy: {
            target: target
        }
    });
});

gulp.task('watch', ['browser-sync'], () => {
    gulp.watch("*.html").on('change', bs.reload);
    gulp.watch("*.js").on('change', bs.reload);
});