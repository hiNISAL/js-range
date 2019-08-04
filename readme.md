# js-range

Python's range function for javascript.

## Install

``` shell
npm i js-range -S
```

## Usage

- in browser

``` html
<script src="js-range.js"></script>
<script>
  const list = range(10);
</script>
```

- esm

``` js
import jsRange from 'jsRange/release/js-range.esm.js';

const list = jsRange(10, 1, -1);
```

- CommonJS

``` js
const jsRange = require('js-range');

const list = jsRange(1, 100, 2);
```

## different with python

- In python, range function will return `Range Class`, `js-range` will return `Array`.

python

``` python
rng = range(0, 10)

print(rng, type(rng))) # range(0, 10) <class 'range'>

# Convert to list
list = list(rng)
```

javascript

``` js
const list = jsRange(0, 10)

console.log(Array.isArray(list)) // true
```

- In python, if set the `zero` to step, python will throw error, `js-range` will return empty Array.

python

``` python
range(1, 10, 0)

# ValueError: range() arg 3 must not be zero
```

javascript

``` js
range(1, 10, 0) // return []
```
