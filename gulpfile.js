var gulp = require('gulp'),
	postcss = require('gulp-postcss');
	rename = require("gulp-rename");

gulp.task('css', function () {
return gulp.src('./css/main.css')
.pipe(postcss([
	require('postcss-import'),
	require('postcss-nested'),
	require('autoprefixer'),
	require('postcss-inline-svg')
]))
.pipe(rename('./bundle.css'))
.pipe(gulp.dest('./css/'))
});

gulp.task('watch',function () {
	gulp.watch('./css/**/*.css', ['css'])
})




