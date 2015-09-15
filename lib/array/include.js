if (!Array.prototype.include) {
  Array.prototype.include = function(value) {
    var O = Object(this);
    var len = O.length >>> 0;

    for(var i = 0; i < len; i++) {
      if (value == O[i]) return true
    }
    return false
  }
}
