# sc-random
[![Bower](https://img.shields.io/bower/v/sc-random.svg?style=flat)](https://github.com/mohayonao/sc-random)
[![NPM Version](http://img.shields.io/npm/v/sc-random.svg?style=flat)](https://www.npmjs.org/package/sc-random)

Random generator same as SuperCollider

## Usage

```javascript
var SCRandom = require("sc-random");

var rand = SCRandom(1234);

console.log(rand.random()); // 0.5005367218982428
console.log(rand.random()); // 0.7501223483122885
console.log(rand.random()); // 0.9778963222634047
```

```javascript
(
  thisThread.randSeed = 1234;

  1.0.rand.postln;  // 0.50053668022156
  1.0.rand.postln;  // 0.75012230873108
  1.0.rand.postln;  // 0.97789621353149
)
```

## License

sc-random is available under the The MIT License.
