var chai = require('chai');
var expect = chai.expect;

require('../../array/each_slice');

describe('any', function() {
  it('should slice the array and return the proper size', function() {
    [1, 2, 3, 4, 5, 6, 7, 8, 9].each_slice(3, function(slice) {
      console.log(slice)
      expect(slice.length).to.eql(3);
    });
  });
});
