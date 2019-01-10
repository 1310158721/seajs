// define用于定义模块，官方推荐一个文件一个模块
define(function (require, exports, module) {
    const mainSay = function () {
		console.log('main start')
	}

	exports.mainSay = mainSay

	// 同步加载
	// let utils = require('./utils')
	// utils.say('hello')
	// utils.eat('something')

	// let methods = require('./methods')
	// console.log(methods.addComma('hello'))
	// console.log(methods.apart('hello'))

	// 异步加载，单文件
	// require.async('./utils', function (utils) {
	// 	utils.say('hello')
	// 	utils.eat('something')
	// })

	// require.async('./methods', function (methods) {
	// 	console.log(methods.addComma('hello'))
	// 	console.log(methods.apart('hello'))
	// })

	// 异步加载，多文件
	require.async(['./global', './utils', './methods'], function (global, utils, methods) {
		console.log(global)

		utils.say('hello')
		utils.eat('something')

		console.log(methods.addComma('hello'))
		console.log(methods.apart('hello'))
	})
})