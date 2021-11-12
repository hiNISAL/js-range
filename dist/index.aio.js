/*!
 * jrange 1.1.1 (https://github.com/hiNISAL/jrange)
 * API https://github.com/hiNISAL/jrange/blob/master/doc/api.md
 * Copyright 2017-2021 hiNISAL. All Rights Reserved
 * Licensed under MIT (https://github.com/hiNISAL/jrange/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.jrange = factory());
}(this, (function () { 'use strict';

  function index (start, end, step) {
      if (step === void 0) { step = 1; }
      if (arguments.length === 0) {
          return [];
      }
      if (arguments.length === 1) {
          end = start;
          start = 0;
      }
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
      for (var i = start; i < end; i += step) {
          res.push(i);
      }
      return res;
  }

  return index;

})));
