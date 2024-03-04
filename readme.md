# [jrange](https://github.com/hiNISAL/jrange)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hiNISAL/jrange/blob/master/LICENSE)
[![Coveralls](https://img.shields.io/coveralls/hiNISAL/jrange.svg)](https://coveralls.io/github/hiNISAL/jrange)
[![NPM downloads](http://img.shields.io/npm/dm/jrange.svg?style=flat-square)](http://www.npmtrends.com/jrange)

The range function of Python implemented using JavaScript.

`range(start, end, step)`

## Install

``` shell
npm i jrange -S
```

## Usage

- in browser

``` html
<script src="/dist/jrange.umd.js"></script>
<script>
  const list = jrange(10);
</script>
```

- esm

``` js
import jrange from 'jrange';

const list = jrange(10, 1, -1);
```

- CommonJS

``` js
const range = require('jrange'); // rename to range

const list = range(1, 100, 2);
```

## arguments

/ | default | required
-|-|-
start | 0 | no |
end | / | yes |
step | 1 | no |

`range(10)` -> `range(0, 10, 1)`

`range(1, 10)` -> `range(1, 10, 1)`

## different with python

- In Python, the range function returns a `Range Class`, while jrange returns an `Array`.

python

``` python
rng = range(0, 10)

print(rng, type(rng))) # range(0, 10) <class 'range'>

# Convert to list
list = list(rng)
```

javascript

``` js
const list = jrange(0, 10)

console.log(Array.isArray(list)) // true
```

- In Python, if the step is zero, the range function will throw an exception, while jrange will return an empty array.

python

``` python
range(1, 10, 0)

# ValueError: range() arg 3 must not be zero
```

javascript

``` js
jrange(1, 10, 0); // return []
```
