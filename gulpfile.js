var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task( 'html', function()
{
	gulp.src([
		'src/html/header.html',
		'src/html/dados.html',
		'src/html/produtos.html',
		'src/html/resumo.html',
		'src/html/footer.html'
		])
	.pipe( concat( 'index.html' ) )
	.pipe( gulp.dest( '' ) )
	.pipe( livereload() );
});

gulp.task( 'styles', function()
{
	gulp.src( 'src/sass/*.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'assets/css' ) )
		.pipe( livereload() );
});

gulp.task( 'watch', function()
{
	livereload.listen();
	gulp.watch( 'src/html/*.html', [ 'html' ] );
	gulp.watch( 'src/sass/**/*.scss', [ 'styles' ] );
});

gulp.task( 'default', [ 'watch' ] );