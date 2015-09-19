if (!Array.prototype.last) {
  Object.defineProperty(Array.prototype, 'last', {
    value: function(num) {
      var n = num ? num : 1;
      return this.splice(this.length - n, this.length);
    }
  });
}
