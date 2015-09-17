if (!Object.prototype.map) {
  Object.prototype.map = function(callback) {
    Object.keys(this).map((key, index) => {
       callback(this[key], key, index)
    });
  }
}
