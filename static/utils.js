define(function (require, exports, module) {
	
	function say (str) {
        console.log(str)
	}

	function eat (something) {
		console.log(something)
	}
    
    // 抛出方法到seajs中，供其调用, 也可以用module.exports来抛出
	exports.say = say
	exports.eat = eat
})