/*
* description:处理基础目录
* author:徐姣
* time:2016-12-23
* */

const gulp = require('gulp');
const path = require('path');
const config = require('./taskConfig.json');

module.exports = {
	'build': path.join(__dirname, 'build'),
	'src': path.join(__dirname, 'src')
};

