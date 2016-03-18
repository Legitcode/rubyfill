
if (!Object.prototype.map) {
  Object.defineProperty(Object.prototype, 'map', {
    value: function(callback) {
      if(this.length){
        return this.map(function(item){
          callback(item)
        })
      }
      var object = this
      return Object.keys(this).map(function(key, index) {
         return callback(object[key], key, index)
      });
    }
  });
}
