/*
 * description:复制和压缩html
 * author：徐姣
 * time:2016-12-27
 * */

const gulp = require('gulp');
const path = require('path');
const htmlmin = require('gulp-htmlmin');

const config = require('./taskConfig.json');
const {delfolder} = require('./delFolder');


module.exports = {
	buildhtml:()=>{
		delfolder("temp","html");
		return gulp.src(path.join(config.src.base, '/**/*.html'))
			.pipe(htmlmin({
				collapseWhitespace: true
			}))
			.pipe(gulp.dest(config.temp.html));
	}
}