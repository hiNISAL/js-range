(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.jrange = factory());
}(this, (function () { 'use strict';

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var index = (function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var hArgs = [];

    // 处理参数
    if (args.length === 0) {
      return [];
    }

    if (args.length === 1) {
      hArgs = [0, args[0], 1];
    }

    if (args.length === 2) {
      hArgs = [args[0], args[1], 1];
    }

    if (args.length === 3) {
      hArgs = args;
    }

    var _hArgs = hArgs,
        _hArgs2 = slicedToArray(_hArgs, 3),
        start = _hArgs2[0],
        end = _hArgs2[1],
        step = _hArgs2[2];

    // 如果步长是0
    // 这种情况错误 返回空


    if (step === 0) {
      return [];
    }

    // 起始和结束相等 则返回空
    if (start === end) {
      return [];
    }

    // 如果起始比结束大 并且步长为正数
    // 这种情况是错误的 因为会进入无限循环
    if (start > end && step >= 0) {
      return [];
    }

    // 如果起始比结束小 并且步长为负数
    // 这种情况是错误的 因为会进入无限循环
    if (start < end && step <= 0) {
      return [];
    }

    var res = [];

    if (start < end) {
      for (var i = start; i < end; i += step) {
        res.push(i);
      }
    } else {
      for (var _i = start; _i > end; _i += step) {
        res.push(_i);
      }
    }

    return res;
  });

  return index;

})));
