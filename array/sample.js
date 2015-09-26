if (!Array.prototype.sample) {
  Object.defineProperty(Array.prototype, "sample", {
    value: function(num){
      var clone = this.slice(0);
      var returnedArray = [];
      var n = num ? num : 1;

      if(n == 1){
        return clone[Math.floor(Math.random()*clone.length)];
      }

      for(var i = 0; i < n; i++){
        var index = Math.floor(Math.random()*clone.length);
        var random = clone.splice(index, 1)[0];
        returnedArray.push(random);
      }
      return returnedArray;
    }
  });
}
