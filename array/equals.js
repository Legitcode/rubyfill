if (!Array.prototype.equals) {
  Object.defineProperty(Array.prototype, 'equals', {
    value: function(otherArray) {
      var O = Object(this);
      var len = O.length >>> 0;

      if (!otherArray) { return false; }
      if (len !== otherArray.length) { return false; }

      for (var i = 0; i < len; i++) {
        if (O[i] instanceof Array && otherArray[i] instanceof Array) {
          if (!O[i].equals(otherArray[i])) { return false; }
        } else if (O[i] !== otherArray[i]) {
          return false;
        }
      }

      return true;
    }
  });
}
