var index = (...args) => {
  let hArgs = [];

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

  const [start, end, step] = hArgs;

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

  const res = [];

  if (start < end) {
    for (let i = start; i < end; i += step) {
      res.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      res.push(i);
    }
  }

  return res;
};

export default index;
