if (!Object.prototype.map) {
  Object.prototype.map = function(callback) {
    var object = this
    return Object.keys(this).map(function(key, index) {
       return callback(object[key], key, index)
    });
  }
}
