/*
 * description:编译js
 * author:徐姣
 * time:2016-12-27
 * */
const gulp = require('gulp');
const webpack = require('gulp-webpack');
const path = require('path');
const config = require('./taskConfig.json');
const {delfolder} = require('./delFolder');

module.exports = {
	buildjs :(packpath)=>{
		delfolder(config.temp.css);
		return gulp.src(packpath)
		.pipe(webpack(require('../webpack.config.babel.js')))
		.pipe(gulp.dest('temp/js'))
	}
};
