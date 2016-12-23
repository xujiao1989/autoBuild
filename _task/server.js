/**
 * description:监听资源变化，启动服务器
 * author:徐姣
 * time:2016-12-22 20:28
 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./taskConfig.json');
module.exports = {
	serverStart : (option={}) => {
		let opt = Object.assign(option,config.serverConfig);
		browserSync.init(opt);
	},
	reload:()=>{
		browserSync.reload();
	}
};





