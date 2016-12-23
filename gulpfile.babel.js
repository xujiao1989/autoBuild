/*
 * @description:gulp任务的启动文件
 * @author:徐姣
 * @time:2016-12-23
 * */

const gulp = require("gulp");
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);//获取根目录
const SRC_PATH = path.resolve(ROOT_PATH,"src");//获取开发目录
const BUILD_PATH = path.resolve(ROOT_PATH,'build');//获取构建目录

const {serverStart,reload} = require('./_task/server');


gulp.task("default",function(){
	serverStart();
});
