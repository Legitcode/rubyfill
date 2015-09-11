if (!Array.prototype.select) {
  Object.defineProperty(Array.prototype, 'select', {
    value: function(callback) {
      var newArray = new Array();
      var O = Object(this);
      var len = O.length >>> 0;

      for(var i = 0; i < len; i++) {
        if (callback(O[i])) {
          newArray.push(O[i]);
        }
      }

      return newArray;
    }
  });
}
