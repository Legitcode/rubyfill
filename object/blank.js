if (!Object.prototype.blank) {
  Object.defineProperty(Object.prototype, "blank", {
    get: function() {
      return Object.keys(this).length === 0;
    }
  });
}
