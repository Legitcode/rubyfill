if (!Array.prototype.flatten) {
  var flattenArray = function(ary) {
    var O = Object(ary),
        len = O.length >>> 0,
        newArray = new Array;

    for (var i = 0; i < len; i++) {
      if (O[i] instanceof Array) {
        newArray = newArray.concat(flattenArray(O[i]));
      } else {
        newArray = newArray.concat(O[i]);
      }
    }

    return newArray;
  }

  Object.defineProperty(Array.prototype, 'flatten', {
    get: function() {
      var O = Object(this);

      return flattenArray(O);
    }
  });
}
