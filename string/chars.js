if (!String.prototype.chars) {
  Object.defineProperty(String.prototype, 'chars', {
    get: function() {
      return this.split('')
    }
  });
}
