/*
 * @description:gulp任务的启动文件
 * @author:徐姣
 * @time:2016-12-23
 * */

const gulp = require("gulp");
const path = require('path');

const {serverStart,reload} = require('./_task/server');
const {buildcss,compressCss,addCssPrefixer} = require('./_task/buildcss');
const {delfolder} = require('./_task/delFolder');
const {buildjs} = require('./_task/buildjs');
const {buildimg}= require('./_task/buildimg');
const {buildhtml}= require('./_task/buildhtml');

gulp.task('del',function(){
	delfolder('temp');
});
gulp.task('buildcss',function(){
	buildcss();
});
gulp.task('buildjs',function(){
	buildjs("src/js/test.js");
});
gulp.task('buildimg',function(){
	buildimg();
});
gulp.task('buildhtml',function(){
	buildhtml();
});


/*
* 开发环境下，所有资源未压缩,在临时目录temp下
* */
gulp.task('dev',[],function() {
	buildcss();
	buildjs("src/js/test.js");
	buildimg();
	buildhtml();
	gulp.watch('src/css/**/*.scss',['buildcss']);
	gulp.watch('src/js/**/*.js',['buildjs']);
	gulp.watch('src/img/**/*',['buildimg']);
	gulp.watch('src/html/**/*.html',['buildhtml']);
});

/*
* 生产环境下，将temp目录下的资源压缩处理后，放到build目录，并删除temp目录
* */

gulp.task('build',function(){
    buildcss();
    buildjs("src/js/test.js");
    buildimg();
    buildhtml();
    gulp.watch('src/css/**/*.scss',['buildcss']);
    gulp.watch('src/js/**/*.js',['buildjs']);
    gulp.watch('src/img/**/*',['buildimg']);
    gulp.watch('src/html/**/*.html',['buildhtml']);
});






