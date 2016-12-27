/*
* description:删除文件夹
* author:徐姣
* time:2016-12-27
* */

const path = require('path');
const del = require('del');
const config = require('./taskConfig.json');

module.exports = {
	delfolder : (folder,file = "")=>{
		/*
		* 默认删除文件夹下的j所以文件，也可知道要删除文件夹类型，
		* */
		return file ?  del([folder]) : del([path.resolve(folder, file)]);
	}
};


