if (!Array.prototype.first) {
  Object.defineProperty(Array.prototype, 'first', {
    value: function(num) {
      var n = num ? num : 1;
      return this.splice(0, n);
    }
  });
}
