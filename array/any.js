if (!Array.prototype.any) {
  Object.defineProperty(Array.prototype, 'any', {
    get: function() {
      var O = Object(this),
          len = O.length >>> 0,
          newArray = new Array;

      for (var i = 0; i < len; i++) {
        if (O[i] !== undefined && O[i] !== null && O[i] !== "") {
          newArray.push(O[i]);
        }
      }
                
      return newArray.length > 0;
    }
  });
}
