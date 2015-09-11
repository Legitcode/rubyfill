if (!Array.prototype.compact) {
  Object.defineProperty(Array.prototype, 'compact', {
    get: function() {
      var newArray = new Array();
      var O = Object(this);
      var len = O.length >>> 0;

      for(var i = 0; i < len; i++) {
        if (O[i] !== undefined && O[i] !== null && O[i] !== "") {
          newArray.push(O[i]);
        }
      }

      return newArray;
    }
  });
}
