/*
* description:编译sass、less
* author:徐姣
* time:2016-12-23
* */

const gulp = require('gulp');

const path = require('path');

const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const csscomb = require("gulp-csscomb");
const config = require('./taskConfig.json');

const autoprefixer_conf = {
	browsers:['last 2 versions','Android >=4.0']
};


module.exports = {
	buildcss : ()=>{
		return gulp.src(path.join(config.src.cssPath))
			.pipe(sass()).on('error', sass.logError)
			.pipe(csscomb())
			.pipe(gulp.dest(config.temp.css));
	},
	addCssPrefixer:()=> {
		return gulp.src(path.join(config.temp.css, '/**/*.css'))
			.pipe(gulp.dest(config.temp.css));
    },
	compressCss:()=> {
		return gulp.src(path.join(config.temp.css, '/**/*.css'))
			.pipe(minifycss())
			.pipe(gulp.dest(config.temp.css));
	}
};
