if (!String.prototype.count) {
  Object.defineProperty(String.prototype, 'count', {
    get: function() {
      return this.length;
    }
  });
}
