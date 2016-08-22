module.exports = {
	sourceDir: './src/',
	buildDir: './build/',

	styles: {
		src: 'src/scss/**/*.scss',
		tmp: 'src/css',
		compiled: 'src/css/style.css',
		build: 'build/css'
	},

	scripts: {
		src: 'src/app/**/*.js',
		build: 'build/js'
	},

	images: {
		src: 'src/images/**/*',
		build: 'build/images'
	},

	fonts: {
		src: 'src/fonts/**/*',
		build: 'build/fonts'
	},

	views: {
		index: 'src/index.html',
    src: 'src/app/**/*.html',
    build: 'build/app'
	}
}
