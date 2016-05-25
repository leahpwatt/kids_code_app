var gulp = require("gulp");
var browsersync = require("browser-sync").create();
var jshint = require('gulp-jshint');

//JS Hint: checking for syntax errors
gulp.task('lint', function() {
  return gulp.src('*.js') 
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Browser Sync
gulp.task("browser-sync", function() {
	browsersync.init({
		server: {
			baseDir: "./"
		}
});

gulp.watch(["*.html", '*.js', '*.styl']).on('change', browsersync.reload);
});

gulp.task("serve", ["browser-sync"], function(){
	gulp.watch("*.js", ["lint"]);
	gulp.watch(["*.html", '*.js', 'css/*.css']).on('change', browsersync.reload);
});