var assert = require("assert");
var rand = require("..")(1234).random;

function closeTo(actual, expected, delta) {
  return Math.abs(actual - expected) <= delta;
}

// thisThread.randSeed = 1234; (..10).collect { 1.0.rand }
var expected = [
  0.50053668022156,
  0.75012230873108,
  0.97789621353149,
  0.18794584274292,
  0.42901861667633,
  0.78861820697784,
  0.72664785385132,
  0.47415328025818,
  0.28603541851044,
  0.61377775669098,
  0.70050978660583
];

expected.forEach(function(expected, i) {
  var actual = rand();
  var message = i + ": expected " + expected + ", but got " + actual;
  assert(closeTo(actual, expected, 1e-6), message);
});

console.log("OK");
