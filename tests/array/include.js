var chai = require('chai');
var expect = chai.expect;
require('../../array/include');

describe('include', function() {
  var array = [1, 2, 3, 4];

  it('should return true if value is in array', function() {
    expect(array.include(3)).to.eql(true);
  });

  it('should return false if value is not in array', function() {
    expect(array.include(33)).to.eql(false);
  });
});
