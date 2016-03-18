if (!Array.prototype.each_slice) {
  Object.defineProperty(Array.prototype, 'each_slice', {
    value: function(size, callback) {
      var O = Object(this),
          len = O.length >>> 0

      for (var i = 0; i < len; i += size) {
        callback.call(this, this.slice(i, i + size));
      }
    }
  });
}
