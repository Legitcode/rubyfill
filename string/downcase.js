if (!String.prototype.downcase) {
  Object.defineProperty(String.prototype, 'downcase', {
    get: function() {
      return this.toLowerCase();
    }
  });
}
