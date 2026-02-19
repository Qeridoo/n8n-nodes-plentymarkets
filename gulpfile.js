const gulp = require('gulp');
const path = require('path');

const srcDir = './nodes';
const distDir = './dist/nodes';

gulp.task('build:icons', function () {
	return gulp
		.src(['**/*.svg'], { cwd: srcDir })
		.pipe(gulp.dest(distDir));
});

gulp.task('default', gulp.series(['build:icons']));
