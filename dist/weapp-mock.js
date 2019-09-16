(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, (function () {
		var current = global['weapp-mock'];
		var exports = global['weapp-mock'] = {};
		factory(exports);
		exports.noConflict = function () { global['weapp-mock'] = current; return exports; };
	}()));
}(this, function (exports) { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	commonjsGlobal.wx={};

	wx.canIUse=jest.fn(function(){});

}));
//# sourceMappingURL=weapp-mock.js.map
