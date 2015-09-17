if (!String.prototype.upcase) {
  Object.defineProperty(String.prototype, 'upcase', {
    get: function() {
      return this.toUpperCase();
    }
  });
}
