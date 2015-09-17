if (!Object.prototype.map) {
  Object.prototype.map = function(callback) {
    var array = []
    Object.keys(this).map((key, index) => {
       array.push(callback(this[key], key, index))
    });
    return array
  }
}
