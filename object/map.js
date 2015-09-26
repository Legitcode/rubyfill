
if (!Object.prototype.map) {
  Object.defineProperty(Object.prototype, 'map', {
    value: function(callback) {
      var object = this
      return Object.keys(this).map(function(key, index) {
         return callback(object[key], key, index)
      });
    }
  });
}
