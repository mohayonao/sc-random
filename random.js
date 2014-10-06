(function(global) {
  "use strict";

  var SCRandom = function(seed) {
    if (typeof seed !== "number" || !isFinite(seed)) {
      seed = Date.now();
    }

    seed += ~(seed <<  15);
    seed ^=   seed >>> 10;
    seed +=   seed <<  3;
    seed ^=   seed >>> 6;
    seed += ~(seed <<  11);
    seed ^=   seed >>> 16;

    var s1 = (1243598713 ^ seed) >>> 0;
    var s2 = (3093459404 ^ seed) >>> 0;
    var s3 = (1821928721 ^ seed) >>> 0;

    if (s1 <  2) {
      s1 = 1243598713;
    }
    if (s2 <  8) {
      s2 = 3093459404;
    }
    if (s3 < 16) {
      s3 = 1821928721;
    }

    return {
      random: function() {
        s1 = ((s1 & 4294967294) << 12) ^ (((s1 << 13) ^  s1) >>> 19);
        s2 = ((s2 & 4294967288) <<  4) ^ (((s2 <<  2) ^  s2) >>> 25);
        s3 = ((s3 & 4294967280) << 17) ^ (((s3 <<  3) ^  s3) >>> 11);
        return ((s1 ^ s2 ^ s3) >>> 0) / 4294967296;
      }
    };
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = SCRandom;
  } else {
    global.SCRandom = SCRandom;
  }
})(this.self || global);
