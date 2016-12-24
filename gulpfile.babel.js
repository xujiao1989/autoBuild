/*
 * @description:gulp任务的启动文件
 * @author:徐姣
 * @time:2016-12-23
 * */

const gulp = require("gulp");
const path = require('path');

const {serverStart,reload} = require('./_task/server');
const {buildcss,compressCss,addCssPrefixer} = require('./_task/buildcss');


gulp.task("default",function(){
	//css.buildcss();
	//serverStart();
});


