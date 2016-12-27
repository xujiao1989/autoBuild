/*
* description:复制和压缩图片
* author：徐姣
* time:2016-12-27
* */

const gulp = require('gulp');
const minifyinmg = require('gulp-imagemin');
const config = require('./taskConfig.json');
const path = require('path');
const {delfolder} = require('./delFolder');
module.exports = {
	buildimg:()=>{
		delfolder(path.join(config.temp.img));
		return gulp.src(path.join(config.src.img,"*"))
			.pipe(minifyinmg())
			.pipe(gulp.dest(config.temp.img));
	}
};