if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(callback) {
      var found;
      var O = Object(this);
      var len = O.length >>> 0;

      for(var i = 0; i < len; i++) {
        if (callback(O[i])) {
          found = O[i];
          break;
        }
      }
    
      return found;
    }
  });
}

