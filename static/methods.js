define(function (require, exports, module) {
	function addComma (value) {
        return value + '...'
	}

	function apart (str) {
		return str.toString().split('')
	}

	module.exports = {
		addComma,
		apart
	}
})