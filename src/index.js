(function (root, pluginName, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD:
    // define(factory());
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node:
    module.exports = factory();
    // Use module export as simulated ES6 default export:(将模块导出用作模拟ES6默认导出)
    module.exports.default = module.exports;
  } else {
    // Browser:
    if (root === undefined) {
      root = typeof global !== "undefined" ? global : window
    }
    root[pluginName] = factory();
  }
}(this, 'deepCopy', function () {
  'use strict';

  return function deepCopy (data) { // 深拷贝
    /* 参数：data-需要深拷贝的数据 */
    if (!data) { return data } // null, undefined values check
    var types = [ Number, String, Boolean ]
    var result
    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function (type) {
      if (data instanceof type) {
        result = type(data)
      }
    })
    if (typeof result === 'undefined') {
      if (Object.prototype.toString.call(data) === '[object Array]') {
        result = []
        data.forEach((child, index, array) => {
          result[index] = deepCopy(child)
        })
      } else if (typeof data === 'object') {
        // DOM
        if (data.nodeType && typeof data.cloneNode === 'function') {
          result = data.cloneNode(true)
        } else if (!data.prototype) { // check that this is a literal
          if (data instanceof Date) {
            result = new Date(data)
          } else {
            // it is an object literal
            result = {}
            for (var i in data) {
              result[i] = deepCopy(data[i])
            }
          }
        } else {
          // 取决于你在这里想要什么，只保留引用，或者创建新对象
          if (data.constructor) {
            result = new data.constructor()
          } else {
            result = data
          }
        }
      } else {
        result = data
      }
    }
    return result
  }
}));
