# jrange

Python's range function for javascript.

`range(start, end, step)`

## Install

``` shell
npm i jrange -S
```

## Usage

- in browser

``` html
<script src="jrange.js"></script>
<script>
  const list = jrange(10);
</script>
```

- esm

``` js
import jrange from 'jrange/release/jrange.esm.js';

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

- In python, range function will return `Range Class`, `jrange` will return `Array`.

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

- In python, if set the `zero` to step, python will throw error, `jrange` will return empty Array.

python

``` python
range(1, 10, 0)

# ValueError: range() arg 3 must not be zero
```

javascript

``` js
jrange(1, 10, 0) // return []
```
