/*
 * description:webpack的配置文件
 * author:徐姣
 * time:2016-12-23
 * */

const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);//获取根目录
const SRC_PATH = path.resolve(ROOT_PATH,"src");//获取开发目录
const BUILD_PATH = path.resolve(ROOT_PATH,'build');//获取构建目录

module.exports = {
	entry:{
	},
	output:{
		path:BUILD_PATH
	},
	devtool:'eval-source-map',
	modules:{
		loaders:[
			{
				test:/\.js?$/,
				loaders:['babel-loader'],
				include:path.resolve(SRC_PATH,"js")
			}
		]
	}
};

